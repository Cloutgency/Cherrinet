# Deployment Troubleshooting Guide

Common issues and solutions for Cherrinet deployment.

---

## Table of Contents

1. [Connection & Access Issues](#connection--access-issues)
2. [SSL/HTTPS Issues](#sshlhttps-issues)
3. [Domain & DNS Issues](#domain--dns-issues)
4. [Application Issues](#application-issues)
5. [Nginx Issues](#nginx-issues)
6. [Performance Issues](#performance-issues)
7. [Security Issues](#security-issues)

---

## Connection & Access Issues

### Cannot Connect to Server via SSH

**Symptoms**: Connection timeout or refused

**Solutions**:

```bash
# 1. Verify server IP is correct
ping your_server_ip

# 2. Check if SSH port is open (from your local machine)
telnet your_server_ip 22

# 3. If using key-based auth, verify permissions
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh

# 4. Try verbose SSH for debugging
ssh -vvv root@your_server_ip

# 5. Restart SSH service on server (if you have console access)
sudo systemctl restart ssh
```

---

### Website Returns 502 Bad Gateway

**Symptoms**: Nginx shows "502 Bad Gateway" error

**Solutions**:

```bash
# 1. Check if application is running
sudo pm2 list

# If not running:
sudo pm2 restart cherrinet-app

# 2. Check if application is listening on correct port
sudo lsof -i :3000

# 3. Check application logs
sudo pm2 logs cherrinet-app

# 4. Verify Nginx upstream configuration
sudo cat /etc/nginx/sites-available/cherrinet | grep -A5 upstream

# 5. Reload Nginx
sudo systemctl reload nginx

# 6. Check if port 3000 is accessible
curl localhost:3000

# 7. If application crashed, check system resources
free -h
df -h
```

**Common Causes**:
- Application process crashed (low memory, port conflict)
- Nginx configuration error
- Incorrect upstream address in Nginx
- Firewall blocking port 3000

---

### Port Already in Use

**Symptoms**: Cannot start application because port is in use

**Solutions**:

```bash
# 1. Find what's using the port
sudo lsof -i :3000

# Output shows: PID and process name

# 2. Kill the process
sudo kill -9 <PID>

# Or kill by name
sudo killall node

# 3. Change port in ecosystem.config.js
# Search for "listen 3000" and change to different port
sudo nano /var/www/cherrinet/ecosystem.config.js

# 4. Update Nginx configuration to match new port
sudo nano /etc/nginx/sites-available/cherrinet
# Look for: proxy_pass http://localhost:3000;
# Change 3000 to your new port

# 5. Restart services
sudo pm2 restart cherrinet-app
sudo systemctl reload nginx
```

---

## SSL/HTTPS Issues

### SSL Certificate Not Recognized

**Symptoms**: Browser warning: "Your connection is not private"

**Solutions**:

```bash
# 1. Check certificate validity
sudo certbot certificates

# Output shows certificate path and expiration date

# 2. If expired, renew certificate
sudo certbot renew --force-renewal

# 3. Verify certificate file exists
sudo ls -la /etc/letsencrypt/live/www.cherrinet.in/

# Should contain:
# - fullchain.pem
# - privkey.pem

# 4. Check Nginx configuration points to correct cert files
sudo grep -n "ssl_certificate" /etc/nginx/sites-available/cherrinet

# Should show:
# ssl_certificate /etc/letsencrypt/live/www.cherrinet.in/fullchain.pem;
# ssl_certificate_key /etc/letsencrypt/live/www.cherrinet.in/privkey.pem;

# 5. Test Nginx syntax
sudo nginx -t

# 6. Reload Nginx
sudo systemctl reload nginx

# 7. Test SSL from command line
openssl s_client -connect www.cherrinet.in:443

# 8. Online SSL checker
# Visit: https://www.ssllabs.com/ssltest/
```

---

### Certificate Renewal Failed

**Symptoms**: Certificate expired or renewal failed

**Solutions**:

```bash
# 1. Check renewal status
sudo certbot renew --dry-run

# 2. View renewal logs
sudo tail -50 /var/log/letsencrypt/letsencrypt.log

# 3. Common issues and fixes:

# Issue: webroot not found
# Fix: Create /var/www/certbot
sudo mkdir -p /var/www/certbot

# Issue: DNS verification failed
# Fix: Ensure domain DNS is properly configured
dig www.cherrinet.in

# Issue: Rate limit exceeded
# Fix: Wait 1 hour before trying again (or use staging)
sudo certbot renew --staging

# 4. Manual renewal
sudo certbot certonly --manual \
  -d cherrinet.in \
  -d www.cherrinet.in

# 5. Check timer for auto-renewal
sudo systemctl status certbot.timer
sudo journalctl -u certbot.timer -n 20
```

---

## Domain & DNS Issues

### Domain Not Resolving

**Symptoms**: Cannot access website via domain name

**Solutions**:

```bash
# 1. Check DNS resolution
nslookup cherrinet.in
nslookup www.cherrinet.in

# Should return your server IP

# 2. Use dig for detailed DNS info
dig cherrinet.in
dig www.cherrinet.in

# 3. Check DNS propagation
# Visit: https://www.whatsmydns.net/
# Search for: www.cherrinet.in

# 4. If DNS not propagating:

# Clear local DNS cache
sudo systemctl restart systemd-resolved

# Wait 24-48 hours for global propagation

# 5. Verify DNS records at registrar
# Log into your registrar (GoDaddy, Namecheap, etc.)
# Check that A records point to correct IP

# 6. Common DNS issues:

# Issue: Pointing to wrong IP
# Fix: Update A record to: YOUR_SERVER_IP

# Issue: CNAME instead of A record
# Fix: Change to A record type

# Issue: No www subdomain
# Fix: Add separate A record for "www"

# 7. Test from command line
ping www.cherrinet.in
curl -I https://www.cherrinet.in
```

---

### www vs non-www Redirect Issues

**Symptoms**: Some URLs work, others don't

**Solutions**:

```bash
# 1. Check Nginx redirect configuration
sudo grep -n "server_name\|return" /etc/nginx/sites-available/cherrinet

# 2. Ensure both domain variations are listed:
server_name cherrinet.in www.cherrinet.in;

# 3. Add explicit redirect from non-www to www
# Edit Nginx config:
sudo nano /etc/nginx/sites-available/cherrinet

# Add this server block:
server {
    listen 80;
    server_name cherrinet.in;
    return 301 https://www.cherrinet.in$request_uri;
}

# 4. Test redirect
curl -I http://cherrinet.in

# Should return: 301 redirect to https://www.cherrinet.in

# 5. Reload Nginx
sudo systemctl reload nginx
```

---

## Application Issues

### Application Crashes Frequently

**Symptoms**: PM2 shows application restarting constantly

**Solutions**:

```bash
# 1. Check application logs for error messages
sudo pm2 logs cherrinet-app

# 2. Check system resources
free -h
df -h
top

# If low on memory:
# - Increase swap space
# - Increase server RAM
# - Optimize application

# 3. Check for missing dependencies
cd /var/www/cherrinet
npm list

# Install missing packages:
pnpm install

# 4. Verify build is valid
ls -la dist/
ls -la dist/index.html

# 5. Check ecosystem.config.js configuration
cat /var/www/cherrinet/ecosystem.config.js

# 6. Restart in no-daemon mode to see errors
cd /var/www/cherrinet
node -e "require('http').createServer((req,res)=>require('fs').createReadStream('dist/index.html').pipe(res)).listen(3000)"

# 7. Check for file permission issues
sudo chown -R cherrinet:cherrinet /var/www/cherrinet
sudo chmod -R 755 /var/www/cherrinet
```

---

### Application Slow or Unresponsive

**Symptoms**: Website slow to load, timeouts

**Solutions**:

```bash
# 1. Check application performance
sudo pm2 monit

# 2. Identify resource bottleneck
# Memory issue:
free -h
sudo pm2 stop cherrinet-app
sudo pm2 delete cherrinet-app
sudo pm2 start ecosystem.config.js

# 3. Check CPU usage
top
htop

# 4. Monitor network
sudo nethogs

# 5. Check disk I/O
sudo iotop

# 6. Optimize bundle size
cd /var/www/cherrinet
npm run build

# Check if bundle is reasonable size
du -sh dist/

# 7. Enable gzip compression (verify in Nginx config)
grep -A5 "gzip on" /etc/nginx/sites-available/cherrinet

# 8. Check for memory leaks
sudo pm2 logs cherrinet-app --err
```

---

## Nginx Issues

### Nginx Won't Start or Reload

**Symptoms**: "systemctl reload nginx" fails

**Solutions**:

```bash
# 1. Test Nginx configuration
sudo nginx -t

# This will show syntax errors and file locations

# 2. Check for common syntax errors
sudo cat /etc/nginx/sites-available/cherrinet

# Common issues:
# - Missing semicolons (;)
# - Mismatched braces { }
# - Invalid directives

# 3. Check file permissions
sudo ls -la /etc/nginx/sites-available/cherrinet
sudo ls -la /etc/nginx/sites-enabled/cherrinet

# Fix permissions:
sudo chmod 644 /etc/nginx/sites-available/cherrinet

# 4. View Nginx error log
sudo tail -50 /var/log/nginx/error.log

# 5. Force reload
sudo systemctl stop nginx
sudo systemctl start nginx

# 6. Check if port 80/443 is already in use
sudo lsof -i :80
sudo lsof -i :443

# If in use, kill process:
sudo kill -9 <PID>

# 7. Reload again
sudo systemctl reload nginx
```

---

### Nginx Returns 404 for Valid Routes

**Symptoms**: Website works but SPA routes return 404

**Solutions**:

```bash
# 1. Check Nginx configuration has SPA fallback
sudo grep -A3 "location /" /etc/nginx/sites-available/cherrinet

# Should contain:
# try_files $uri $uri/ /index.html;

# 2. If missing, add it:
sudo nano /etc/nginx/sites-available/cherrinet

# Add under location / block:
location / {
    try_files $uri $uri/ /index.html;
}

# 3. Check that index.html exists
ls -la /var/www/cherrinet/dist/index.html

# 4. Verify root path is correct
sudo grep "root" /etc/nginx/sites-available/cherrinet

# Should be: root /var/www/cherrinet/dist;

# 5. Test file access
sudo cat /var/www/cherrinet/dist/index.html | head -5

# 6. Reload Nginx
sudo nginx -t
sudo systemctl reload nginx
```

---

### Nginx Returns 403 Forbidden

**Symptoms**: Nginx shows "403 Forbidden" error

**Solutions**:

```bash
# 1. Check file permissions
sudo ls -la /var/www/cherrinet/dist/

# Should be readable by www-data or Nginx user

# 2. Fix permissions
sudo chown -R www-data:www-data /var/www/cherrinet/dist/
sudo chmod -R 755 /var/www/cherrinet/dist/

# 3. Check Nginx user
grep "user " /etc/nginx/nginx.conf

# 4. Check if index file exists
ls -la /var/www/cherrinet/dist/index.html

# 5. Check for access restrictions in Nginx config
sudo grep -n "deny\|allow" /etc/nginx/sites-available/cherrinet

# 6. View error log for details
sudo tail -20 /var/log/nginx/error.log
```

---

## Performance Issues

### High CPU Usage

**Symptoms**: CPU constantly at 90%+

**Solutions**:

```bash
# 1. Identify which process
top

# 2. Check if it's Node.js
ps aux | grep node

# 3. Profile application
sudo pm2 logs cherrinet-app

# 4. Check for infinite loops or heavy computation
# Look for patterns in logs

# 5. If application issue:
# - Review recent code changes
# - Check for missing database indexes
# - Optimize asset serving

# 6. If temporary spike:
# - Wait and monitor
# - Check if build process running
# - Check if backup running
```

---

### High Memory Usage

**Symptoms**: Server running out of RAM

**Solutions**:

```bash
# 1. Check memory usage
free -h
ps aux --sort=-%mem | head -10

# 2. Set memory limits in ecosystem.config.js
# Edit file:
sudo nano /var/www/cherrinet/ecosystem.config.js

# Add/modify:
max_memory_restart: '512M'

# 3. Restart application
sudo pm2 restart cherrinet-app

# 4. Check for memory leaks
# Monitor over time:
watch -n 5 'free -h && ps aux --sort=-%mem | head -5'

# 5. If persistent memory leak:
# - Check for large data structures
# - Check for event listener leaks
# - Review recent dependencies updates
```

---

## Security Issues

### Slow DDoS Attack

**Symptoms**: Website slow, many requests in logs

**Solutions**:

```bash
# 1. Check access logs
sudo tail -100 /var/log/nginx/access.log | tail -20

# Look for repeated IP addresses

# 2. Identify attacking IPs
sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10

# 3. Block IP in Nginx
sudo nano /etc/nginx/sites-available/cherrinet

# Add to beginning of server block:
deny 192.168.1.1;  # Replace with attacking IP

# 4. Or use fail2ban
sudo apt install -y fail2ban
sudo systemctl start fail2ban
sudo systemctl enable fail2ban

# 5. Reload Nginx
sudo systemctl reload nginx
```

---

### Certificate Mixed Content Warning

**Symptoms**: "Mixed content" warning in browser console

**Solutions**:

```bash
# 1. Check Nginx config forces HTTPS
sudo grep -n "https" /etc/nginx/sites-available/cherrinet

# 2. Ensure all resources use HTTPS
grep "http://" /var/www/cherrinet/dist/index.html

# If found:
# - Update all http:// to https://
# - Or use protocol-relative URLs: //domain.com

# 3. Add HSTS header to Nginx
sudo nano /etc/nginx/sites-available/cherrinet

# Add to server block:
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# 4. Reload Nginx
sudo systemctl reload nginx
```

---

## Quick Diagnostic Commands

```bash
# Overall system health
echo "=== System Status ===" && \
echo "Nginx: $(systemctl is-active nginx)" && \
echo "PM2 Apps: $(pm2 list | grep online)" && \
echo "Memory: $(free -h | grep Mem)" && \
echo "Disk: $(df -h /var/www)" && \
echo "DNS: $(dig +short www.cherrinet.in)" && \
echo "HTTPS: $(curl -sI https://www.cherrinet.in | head -1)"

# Full diagnostic report
sudo bash -c '
echo "=== System Info ===" && \
uname -a && \
echo -e "\n=== Node.js ===" && \
node --version && \
echo -e "\n=== Nginx ===" && \
nginx -v && \
echo -e "\n=== PM2 ===" && \
pm2 list && \
echo -e "\n=== Memory ===" && \
free -h && \
echo -e "\n=== Disk ===" && \
df -h && \
echo -e "\n=== Logs (last 5 lines) ===" && \
tail -5 /var/log/nginx/error.log && \
tail -5 /var/log/cherrinet-error.log
'
```

---

## When to Escalate

If you've tried these solutions and still have issues:

1. **Collect diagnostic information**:
   ```bash
   sudo pm2 logs cherrinet-app > logs.txt
   sudo tail -100 /var/log/nginx/access.log >> logs.txt
   sudo tail -100 /var/log/nginx/error.log >> logs.txt
   ```

2. **Contact support with**:
   - Error messages from logs
   - Steps already attempted
   - Server specifications (CPU, RAM, OS version)
   - Recent changes made

3. **Useful resources**:
   - Nginx Documentation: https://nginx.org/en/docs/
   - Node.js Issues: https://nodejs.org/en/docs/
   - Let's Encrypt Support: https://letsencrypt.org/docs/
   - Stack Overflow: https://stackoverflow.com/

---

**Last Updated**: May 2026
