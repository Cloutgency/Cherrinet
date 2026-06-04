# Monitoring & Maintenance Guide

Complete guide for monitoring and maintaining the Cherrinet production deployment.

---

## Table of Contents

1. [Monitoring Setup](#monitoring-setup)
2. [Health Checks](#health-checks)
3. [Performance Monitoring](#performance-monitoring)
4. [Log Management](#log-management)
5. [Regular Maintenance Tasks](#regular-maintenance-tasks)
6. [Alerts & Notifications](#alerts--notifications)
7. [Metrics Dashboard](#metrics-dashboard)

---

## Monitoring Setup

### Install Monitoring Tools

```bash
# Install essential monitoring tools
sudo apt install -y htop iotop nethogs curl wget

# Install PM2 monitoring
sudo npm install -g pm2
pm2 install pm2-auto-pull

# View monitoring dashboard
pm2 monit
```

### Enable PM2 Web Dashboard

```bash
# Start PM2 web server (runs on port 9615)
pm2 web

# Access at: http://localhost:9615

# Optional: Run as daemon
pm2 web -o /var/log/pm2-web.log -e /var/log/pm2-web-error.log &
```

---

## Health Checks

### Automated Health Check Script

Create `/usr/local/bin/health-check.sh`:

```bash
#!/bin/bash

echo "=== Cherrinet Health Check ==="
echo "Time: $(date)"
echo ""

# 1. Website availability
echo "1. Website Availability"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://www.cherrinet.in)
if [ "$HTTP_CODE" -eq 200 ]; then
    echo "   ✓ Website is accessible (HTTP $HTTP_CODE)"
else
    echo "   ✗ Website returned HTTP $HTTP_CODE"
fi
echo ""

# 2. SSL certificate status
echo "2. SSL Certificate Status"
CERT_EXPIRY=$(echo | openssl s_client -servername www.cherrinet.in -connect www.cherrinet.in:443 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)
DAYS_LEFT=$(( ($(date -d "$CERT_EXPIRY" +%s) - $(date +%s)) / 86400 ))
if [ "$DAYS_LEFT" -gt 30 ]; then
    echo "   ✓ Certificate valid for $DAYS_LEFT days"
else
    echo "   ✗ Certificate expires in $DAYS_LEFT days - RENEWAL NEEDED!"
fi
echo ""

# 3. Application status
echo "3. Application Status"
if pm2 list | grep -q "online.*cherrinet-app"; then
    echo "   ✓ PM2 application is running"
else
    echo "   ✗ PM2 application is NOT running"
fi
echo ""

# 4. Nginx status
echo "4. Nginx Status"
if sudo systemctl is-active --quiet nginx; then
    echo "   ✓ Nginx is running"
else
    echo "   ✗ Nginx is NOT running"
fi
echo ""

# 5. Disk usage
echo "5. Disk Usage"
DISK_USAGE=$(df -h /var/www | awk 'NR==2 {print $5}')
echo "   Storage used: $DISK_USAGE"
echo ""

# 6. Memory usage
echo "6. Memory & CPU"
MEM=$(free -h | awk 'NR==2 {print $3 "/" $2}')
echo "   Memory: $MEM"
echo ""

# 7. Recent errors
echo "7. Recent Errors (last 5)"
sudo tail -5 /var/log/nginx/error.log | grep -v "^$" || echo "   No errors"
echo ""

echo "=== End Health Check ==="
```

Make it executable and schedule it:

```bash
# Make executable
sudo chmod +x /usr/local/bin/health-check.sh

# Run manually
sudo /usr/local/bin/health-check.sh

# Schedule daily at 8 AM
sudo crontab -e
# Add: 0 8 * * * /usr/local/bin/health-check.sh >> /var/log/health-check.log 2>&1
```

---

### Manual Health Check

```bash
# Quick manual health check
echo "1. Website: $(curl -s -o /dev/null -w '%{http_code}' https://www.cherrinet.in)"
echo "2. App status: $(pm2 list | grep cherrinet-app | awk '{print $10}')"
echo "3. Nginx: $(sudo systemctl is-active nginx)"
echo "4. Memory: $(free -h | awk 'NR==2 {print $3 "/" $2}')"
echo "5. Disk: $(df -h /var/www | awk 'NR==2 {print $5}')"
```

---

## Performance Monitoring

### Real-time Performance Monitoring

```bash
# Monitor application performance
pm2 monit

# Monitor system resources
htop

# Monitor network
sudo nethogs

# Monitor disk I/O
sudo iotop

# Monitor specific process
ps aux | grep node
```

### Collect Performance Metrics

Create `/usr/local/bin/collect-metrics.sh`:

```bash
#!/bin/bash

METRICS_DIR="/var/log/metrics"
mkdir -p $METRICS_DIR
DATE=$(date +%Y-%m-%d_%H-%M-%S)

# Collect CPU & Memory
echo "$(date),$(top -bn1 | grep "Cpu(s)" | awk '{print $2}'),$(free -h | awk 'NR==2 {print $3}')" >> $METRICS_DIR/cpu-memory.csv

# Collect disk usage
echo "$(date),$(df /var/www | awk 'NR==2 {print $5}')" >> $METRICS_DIR/disk.csv

# Collect response time
RESPONSE_TIME=$(curl -s -o /dev/null -w '%{time_total}' https://www.cherrinet.in)
echo "$(date),$RESPONSE_TIME" >> $METRICS_DIR/response-time.csv

# Collect connection count
CONNECTIONS=$(netstat -an | grep ESTABLISHED | wc -l)
echo "$(date),$CONNECTIONS" >> $METRICS_DIR/connections.csv
```

Schedule collection:

```bash
# Make executable
sudo chmod +x /usr/local/bin/collect-metrics.sh

# Collect every 5 minutes
# Add to crontab: */5 * * * * /usr/local/bin/collect-metrics.sh
```

---

## Log Management

### View Logs

```bash
# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Application logs
pm2 logs cherrinet-app

# System logs
sudo journalctl -u nginx -f
sudo journalctl -u pm2-cherrinet -f

# Combined real-time view
# Create alias in ~/.bashrc
alias logs='sudo tail -f /var/log/nginx/access.log & pm2 logs cherrinet-app'
```

### Filter Logs

```bash
# Show only errors
sudo grep ERROR /var/log/nginx/error.log

# Show requests by status code
sudo awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | sort -rn

# Show top IPs making requests
sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10

# Show slowest requests
sudo awk '{print $NF}' /var/log/nginx/access.log | sort -rn | head -10

# Show requests in last hour
sudo tail -n +1 /var/log/nginx/access.log | grep "$(date -d '1 hour ago' '+%d/%b/%Y:%H')"
```

### Log Rotation Configuration

Verify log rotation is configured in `/etc/logrotate.d/nginx`:

```bash
# View default nginx rotation
cat /etc/logrotate.d/nginx

# Add custom rotation for app logs
sudo nano /etc/logrotate.d/cherrinet

# Add:
/var/log/cherrinet-*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 cherrinet cherrinet
    sharedscripts
    postrotate
        pm2 kill
        pm2 start ecosystem.config.js
    endscript
}
```

---

## Regular Maintenance Tasks

### Daily Tasks

```bash
# Morning check (8 AM)
0 8 * * * /usr/local/bin/health-check.sh >> /var/log/daily-check.log 2>&1

# Monitor logs for errors
# Manually: sudo tail -20 /var/log/nginx/error.log

# Check disk space
# Manually: df -h
```

### Weekly Tasks

```bash
# Weekly backup verification
# Add to crontab:
0 3 * * 0 /usr/local/bin/backup-cherrinet.sh

# Update security patches
# Manual: sudo apt update && apt upgrade -y

# Review access patterns
sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -20
```

### Monthly Tasks

```bash
# Check SSL certificate expiration
sudo certbot certificates

# Update system packages
sudo apt update && sudo apt upgrade -y

# Review performance metrics
ls -la /var/log/metrics/

# Optimize database (if applicable)
# Your optimization commands here

# Clean old logs
sudo journalctl --vacuum=30d
sudo find /var/log -type f -mtime +90 -delete
```

### Quarterly Tasks

```bash
# Update Node.js dependencies
cd /var/www/cherrinet
npm outdated
npm update

# Security audit
npm audit

# Performance benchmarking
# Run load test: apache2-bench or wrk

# Disaster recovery test
# Restore from backup to test system
```

### Annual Tasks

```bash
# Major version updates
# Plan and test in staging first

# Infrastructure review
# Assess if server specifications still adequate

# Security hardening review
# Update Nginx configuration if needed

# Backup restoration test
# Verify backups can be restored successfully
```

---

## Alerts & Notifications

### Email Alerts Setup

Create `/usr/local/bin/alert-if-down.sh`:

```bash
#!/bin/bash

WEBSITE="https://www.cherrinet.in"
EMAIL="admin@cherrinet.in"
STATUS_FILE="/tmp/cherrinet-status"

# Check website
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $WEBSITE)

if [ "$HTTP_CODE" -ne 200 ]; then
    # Website is down
    if [ ! -f "$STATUS_FILE" ]; then
        # First failure, send alert
        SUBJECT="⚠️ ALERT: Cherrinet Website Down"
        MESSAGE="
Website: $WEBSITE
Status: $HTTP_CODE
Time: $(date)
        
Please check immediately!
        "
        echo "$MESSAGE" | mail -s "$SUBJECT" $EMAIL
        touch "$STATUS_FILE"
    fi
else
    # Website is up
    if [ -f "$STATUS_FILE" ]; then
        # Was down, now up
        SUBJECT="✓ INFO: Cherrinet Website Back Online"
        MESSAGE="
Website: $WEBSITE
Status: $HTTP_CODE
Time: $(date)
        
Service restored!
        "
        echo "$MESSAGE" | mail -s "$SUBJECT" $EMAIL
        rm "$STATUS_FILE"
    fi
fi
```

Schedule alerts:

```bash
# Check every 5 minutes
*/5 * * * * /usr/local/bin/alert-if-down.sh

# Install mail utility if needed
sudo apt install -y mailutils
```

### Slack Notifications

Create `/usr/local/bin/slack-alert.sh`:

```bash
#!/bin/bash

WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
MESSAGE="$1"

curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\":\"🚨 $MESSAGE\"}" \
  $WEBHOOK_URL
```

Usage:

```bash
# Send alert
/usr/local/bin/slack-alert.sh "Website is down!"

# Add to monitoring scripts for notifications
```

---

## Metrics Dashboard

### Create Simple Dashboard

Create `/var/www/cherrinet/monitoring/index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Cherrinet Monitoring Dashboard</title>
    <style>
        body { font-family: Arial; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .metric { background: white; padding: 20px; margin: 10px 0; border-radius: 5px; }
        .status-ok { color: green; }
        .status-warning { color: orange; }
        .status-error { color: red; }
        h1 { color: #333; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔍 Cherrinet Monitoring Dashboard</h1>
        
        <div class="grid">
            <div class="metric">
                <h3>Website Status</h3>
                <p id="website-status" class="status-ok">Loading...</p>
            </div>
            
            <div class="metric">
                <h3>Application Status</h3>
                <p id="app-status" class="status-ok">Loading...</p>
            </div>
            
            <div class="metric">
                <h3>SSL Certificate</h3>
                <p id="ssl-status" class="status-ok">Loading...</p>
            </div>
            
            <div class="metric">
                <h3>Response Time</h3>
                <p id="response-time">Loading...</p>
            </div>
        </div>
        
        <div class="metric">
            <h3>Last Updated</h3>
            <p id="last-update">-</p>
            <button onclick="location.reload()">Refresh Now</button>
        </div>
    </div>
    
    <script>
        // Auto-refresh every 60 seconds
        setInterval(() => location.reload(), 60000);
        
        // Update timestamp
        document.getElementById('last-update').textContent = new Date().toLocaleString();
    </script>
</body>
</html>
```

### Advanced Monitoring with Prometheus

```bash
# Install Prometheus
sudo apt install -y prometheus

# Configure Prometheus
sudo nano /etc/prometheus/prometheus.yml

# Add targets:
# - job_name: 'nodejs'
#   targets: ['localhost:9090']

# Start Prometheus
sudo systemctl start prometheus
sudo systemctl enable prometheus

# Access dashboard at: http://localhost:9090
```

---

## Monitoring Checklist

Daily:
- [ ] Check website accessibility
- [ ] Review error logs
- [ ] Verify application is running

Weekly:
- [ ] Review performance metrics
- [ ] Check disk space usage
- [ ] Verify backup completion

Monthly:
- [ ] SSL certificate expiration check
- [ ] Security updates applied
- [ ] Performance analysis

Quarterly:
- [ ] Dependency updates
- [ ] Security audit
- [ ] Disaster recovery test

---

## Commands Quick Reference

```bash
# System Status
pm2 list                                    # Application status
sudo systemctl status nginx                 # Nginx status
sudo systemctl status ssh                   # SSH status
free -h && df -h                            # Resources

# View Logs
pm2 logs cherrinet-app                      # App logs
sudo tail -f /var/log/nginx/access.log      # Access logs
sudo tail -f /var/log/nginx/error.log       # Error logs

# Performance
pm2 monit                                   # PM2 monitoring
htop                                        # System monitoring
top                                         # Process monitoring

# Network
netstat -tlnp | grep node                   # Open ports
curl -I https://www.cherrinet.in            # Test HTTPS
dig www.cherrinet.in                        # DNS check

# Maintenance
sudo apt update && apt upgrade               # Update packages
certbot certificates                        # Check SSL expiry
pm2 restart cherrinet-app                   # Restart app
```

---

**Last Updated**: May 2026
**Created For**: Cherrinet Development Team
