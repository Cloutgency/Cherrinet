# Cherrinet Website - Complete Deployment Guide

A comprehensive guide to deploy the Cherrinet website on a private server with a custom domain (www.cherrinet.in).

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Server Setup](#server-setup)
3. [Application Deployment](#application-deployment)
4. [Nginx Configuration](#nginx-configuration)
5. [SSL Certificate Setup](#ssl-certificate-setup)
6. [Domain Configuration](#domain-configuration)
7. [Process Management](#process-management)
8. [Monitoring & Logs](#monitoring--logs)
9. [Backup & Recovery](#backup--recovery)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software
- **OS**: Ubuntu 20.04 LTS or higher (recommended)
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **Git**: Latest version
- **Nginx**: Latest stable version
- **Certbot**: For SSL certificate management

### Server Requirements
- **RAM**: Minimum 2GB (4GB+ recommended)
- **Storage**: Minimum 20GB available
- **CPU**: 2 cores (4 cores recommended)
- **Bandwidth**: Sufficient for expected traffic
- **Port Access**: 22 (SSH), 80 (HTTP), 443 (HTTPS)

### Domain Requirements
- Domain: `www.cherrinet.in` (already registered)
- DNS access/control panel
- Email for SSL certificate notifications

---

## Server Setup

### Step 1: Connect to Your Server

```bash
# SSH into your server
ssh root@your_server_ip

# Or if using a specific user
ssh user@your_server_ip
```

### Step 2: Update System Packages

```bash
# Update package lists
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y

# Install essential tools
sudo apt install -y curl wget git vim nano htop
```

### Step 3: Install Node.js & npm

```bash
# Using NodeSource repository (recommended for latest Node versions)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js (includes npm)
sudo apt install -y nodejs

# Verify installation
node --version    # Should show v18.x.x
npm --version     # Should show 9.x.x or higher

# Optional: Install npm globally latest version
sudo npm install -g npm@latest
```

### Step 4: Install Nginx

```bash
# Install Nginx
sudo apt install -y nginx

# Start Nginx service
sudo systemctl start nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

# Check Nginx status
sudo systemctl status nginx
```

### Step 5: Install Git & Clone Repository

```bash
# Install Git (if not already installed)
sudo apt install -y git

# Create application directory
sudo mkdir -p /var/www/cherrinet
cd /var/www/cherrinet

# Clone your repository (replace with your repo URL)
# Option 1: If using HTTPS
git clone https://github.com/yourusername/cherrinet-website.git .

# Option 2: If using SSH (requires SSH key setup)
# git clone git@github.com:yourusername/cherrinet-website.git .

# Navigate to project directory
cd /var/www/cherrinet
```

### Step 6: Create Non-Root User (Security Best Practice)

```bash
# Create a new user for the application
sudo useradd -m -s /bin/bash cherrinet

# Add user to sudo group (optional, for admin tasks)
sudo usermod -aG sudo cherrinet

# Change ownership of application directory
sudo chown -R cherrinet:cherrinet /var/www/cherrinet

# Set appropriate permissions
sudo chmod -R 755 /var/www/cherrinet
```

---

## Application Deployment

### Step 1: Install Dependencies

```bash
# Navigate to project directory
cd /var/www/cherrinet

# Install Node.js dependencies
npm install
# OR if using pnpm (as per your pnpm-workspace.yaml)
sudo npm install -g pnpm
pnpm install
```

### Step 2: Build the Production Version

```bash
# Create optimized production build
npm run build
# OR with pnpm
pnpm build

# Expected output: dist/ folder with optimized files
```

### Step 3: Verify Build

```bash
# Check if build was successful
ls -la dist/

# You should see:
# - index.html
# - assets/
# - images/
```

### Step 4: Create Environment Configuration

```bash
# Create .env file for production
sudo nano /var/www/cherrinet/.env

# Add the following content:
VITE_API_URL=https://www.cherrinet.in
VITE_APP_NAME=Cherrinet
NODE_ENV=production
```

---

## Nginx Configuration

### Step 1: Create Nginx Server Block

```bash
# Create Nginx configuration file
sudo nano /etc/nginx/sites-available/cherrinet

# Paste the following configuration:
```

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name cherrinet.in www.cherrinet.in;
    
    location / {
        return 301 https://www.cherrinet.in$request_uri;
    }
    
    # Allow certbot to verify SSL
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
}

# Main HTTPS server block
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name cherrinet.in www.cherrinet.in;

    # SSL certificate paths (will be filled by Certbot)
    ssl_certificate /etc/letsencrypt/live/www.cherrinet.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.cherrinet.in/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Root directory for static files
    root /var/www/cherrinet/dist;
    index index.html index.htm;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss 
               application/rss+xml font/truetype font/opentype 
               application/vnd.ms-fontobject image/svg+xml;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing - serve index.html for all non-file routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Prevent access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

### Step 2: Enable Nginx Configuration

```bash
# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/cherrinet /etc/nginx/sites-enabled/

# Disable default Nginx site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test passes: "syntax is ok"
# Reload Nginx
sudo systemctl reload nginx
```

---

## SSL Certificate Setup

### Step 1: Install Certbot

```bash
# Install Certbot and Nginx plugin
sudo apt install -y certbot python3-certbot-nginx

# Create certbot directory
sudo mkdir -p /var/www/certbot
```

### Step 2: Generate SSL Certificate

```bash
# Obtain SSL certificate for your domain
sudo certbot certonly --webroot \
  -w /var/www/certbot \
  -d cherrinet.in \
  -d www.cherrinet.in \
  --email your-email@example.com \
  --agree-tos \
  --non-interactive

# The certificate will be stored at:
# /etc/letsencrypt/live/www.cherrinet.in/
```

### Step 3: Auto-Renewal Setup

```bash
# Enable automatic renewal
sudo certbot renew --dry-run

# Check if renewal service is active
sudo systemctl status certbot.timer

# Enable the timer
sudo systemctl enable certbot.timer
```

---

## Domain Configuration

### Step 1: Update DNS Records

Access your domain registrar's DNS management panel and add/update these records:

```
Type    | Name           | Value
--------|----------------|----------------------------------
A       | @              | your_server_ip_address
A       | www            | your_server_ip_address
CNAME   | www            | cherrinet.in (optional)
```

**Popular Registrars:**
- GoDaddy: https://godaddy.com
- Namecheap: https://namecheap.com
- Bluehost: https://bluehost.com

### Step 2: Verify DNS Propagation

```bash
# Check A record
dig cherrinet.in

# Check CNAME record
dig www.cherrinet.in

# Use online tools: https://mxtoolbox.com/
```

### Step 3: Test HTTPS Access

```bash
# Test HTTPS connectivity
curl -I https://www.cherrinet.in

# Should return HTTP/2 200 with valid SSL certificate
```

---

## Process Management

### Step 1: Install PM2

```bash
# Install PM2 globally
sudo npm install -g pm2

# Verify installation
pm2 --version
```

### Step 2: Create PM2 Ecosystem File

```bash
# Create ecosystem configuration
sudo nano /var/www/cherrinet/ecosystem.config.js

# Paste the following:
```

```javascript
module.exports = {
  apps: [
    {
      name: 'cherrinet-app',
      script: 'npm',
      args: 'run serve',
      cwd: '/var/www/cherrinet',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production'
      },
      error_file: '/var/log/cherrinet-error.log',
      out_file: '/var/log/cherrinet-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      ignore_watch: ['node_modules', 'dist', '.git'],
      merge_logs: true,
    }
  ]
};
```

### Step 3: Create Serve Script

```bash
# Update package.json to add serve script
sudo nano /var/www/cherrinet/package.json

# Add to "scripts" section:
"serve": "node -e \"require('http').createServer((req,res)=>require('fs').createReadStream('dist/index.html').pipe(res)).listen(3000)\""
```

Alternatively, install a static server:

```bash
# Install serve package
npm install -g serve

# Update the serve script in package.json
"serve": "serve -s dist -l 3000"
```

### Step 4: Start Application with PM2

```bash
# Change to project directory
cd /var/www/cherrinet

# Start application
sudo pm2 start ecosystem.config.js

# Save PM2 configuration
sudo pm2 save

# Enable PM2 startup on system reboot
sudo pm2 startup systemd -u cherrinet --hp /home/cherrinet

# Verify PM2 is running
sudo pm2 list
```

---

## Monitoring & Logs

### Step 1: View Application Logs

```bash
# View PM2 logs
sudo pm2 logs cherrinet-app

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# View system logs
sudo journalctl -u nginx -f
```

### Step 2: Set Up Log Rotation

```bash
# Create logrotate configuration
sudo nano /etc/logrotate.d/cherrinet

# Paste:
/var/log/cherrinet-*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 cherrinet cherrinet
    sharedscripts
}
```

### Step 3: Monitor Performance

```bash
# Install monitoring tools
sudo apt install -y htop iotop

# Real-time system monitoring
htop

# Monitor I/O performance
sudo iotop

# Check disk usage
df -h

# Check memory usage
free -h
```

---

## Backup & Recovery

### Step 1: Create Backup Script

```bash
# Create backup script
sudo nano /usr/local/bin/backup-cherrinet.sh

# Paste the following:
```

```bash
#!/bin/bash

BACKUP_DIR="/backups/cherrinet"
DATE=$(date +%Y-%m-%d_%H-%M-%S)
SOURCE_DIR="/var/www/cherrinet"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Create compressed backup
tar -czf $BACKUP_DIR/cherrinet-backup-$DATE.tar.gz \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='dist' \
    $SOURCE_DIR

# Backup database (if applicable)
# mysqldump -u user -p database > $BACKUP_DIR/database-$DATE.sql

# Keep only last 30 days of backups
find $BACKUP_DIR -type f -mtime +30 -delete

# Log backup completion
echo "Backup completed at $DATE" >> /var/log/backup.log
```

### Step 2: Schedule Daily Backups

```bash
# Make script executable
sudo chmod +x /usr/local/bin/backup-cherrinet.sh

# Create cron job for daily backups
sudo crontab -e

# Add the following line (runs daily at 2 AM):
0 2 * * * /usr/local/bin/backup-cherrinet.sh
```

### Step 3: Remote Backup (Optional)

```bash
# Install S3 tools for AWS S3 backup
sudo apt install -y awscli

# Configure AWS credentials
aws configure

# Upload backups to S3
aws s3 sync /backups/cherrinet s3://your-bucket-name/cherrinet-backups/
```

---

## Deployment Workflow

### Initial Deployment

```bash
# 1. SSH into server
ssh root@your_server_ip

# 2. Navigate to project
cd /var/www/cherrinet

# 3. Update code from repository
git pull origin main

# 4. Install dependencies
pnpm install

# 5. Build application
pnpm build

# 6. Restart application
sudo pm2 restart cherrinet-app

# 7. Verify deployment
curl -I https://www.cherrinet.in
```

### Continuous Deployment (Optional)

Create a GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /var/www/cherrinet
            git pull origin main
            pnpm install
            pnpm build
            sudo pm2 restart cherrinet-app
```

---

## Troubleshooting

### Issue 1: Nginx Returns 404

**Problem**: URLs return 404 even though files exist

**Solution**:
```bash
# Check if Nginx configuration has routing rule
sudo nginx -T

# Ensure index.html is served for all routes:
# Add to server block:
location / {
    try_files $uri $uri/ /index.html;
}
```

### Issue 2: SSL Certificate Not Working

**Problem**: Browser shows certificate error

**Solution**:
```bash
# Check certificate validity
sudo certbot certificates

# Renew certificate manually
sudo certbot renew --force-renewal

# Check Nginx configuration paths
sudo cat /etc/nginx/sites-available/cherrinet | grep ssl
```

### Issue 3: Application Port Already in Use

**Problem**: Port 3000 is already in use

**Solution**:
```bash
# Check what's using the port
sudo lsof -i :3000

# Kill process using the port
sudo kill -9 <PID>

# Or change port in ecosystem.config.js and restart
sudo pm2 restart cherrinet-app
```

### Issue 4: High Memory Usage

**Problem**: Node.js process consuming too much memory

**Solution**:
```bash
# Set memory limit in ecosystem.config.js:
max_memory_restart: '512M'

# Restart PM2
sudo pm2 restart cherrinet-app

# Monitor memory usage
watch -n 1 free -h
```

### Issue 5: Domain Not Resolving

**Problem**: Website not accessible via domain name

**Solution**:
```bash
# Check DNS records
nslookup cherrinet.in

# Clear local DNS cache
sudo systemctl restart systemd-resolved

# Test connectivity
ping www.cherrinet.in
curl -I https://www.cherrinet.in
```

### Useful Commands

```bash
# View system information
uname -a
cat /etc/os-release

# Check listening ports
sudo netstat -tulpn
sudo ss -tulpn

# Check file permissions
ls -la /var/www/cherrinet

# Restart all services
sudo systemctl restart nginx
sudo pm2 restart cherrinet-app
sudo systemctl restart systemd-resolved

# View system resource usage
top
free -h
df -h
```

---

## Post-Deployment Checklist

- [ ] Domain resolves to correct IP address
- [ ] HTTPS/SSL certificate is valid
- [ ] Website loads without errors
- [ ] All pages and routes work correctly
- [ ] Static assets (CSS, JS, images) load correctly
- [ ] Nginx logs show successful requests (200 status)
- [ ] PM2 application is running and healthy
- [ ] Backup script is scheduled and working
- [ ] Monitoring is set up and functional
- [ ] Security headers are present (via curl -i)
- [ ] Performance testing completed
- [ ] Error pages configured
- [ ] Analytics/monitoring tools configured

---

## Additional Resources

- **Vite Documentation**: https://vitejs.dev/guide/
- **Nginx Documentation**: https://nginx.org/en/docs/
- **Let's Encrypt**: https://letsencrypt.org/
- **PM2 Documentation**: https://pm2.keymetrics.io/docs/
- **Ubuntu Server Guide**: https://ubuntu.com/server/docs

---

## Support & Maintenance

### Monthly Tasks
- Monitor server performance metrics
- Review and analyze logs
- Update system packages: `sudo apt update && apt upgrade`
- Verify backups are completing successfully
- Check SSL certificate expiration: `sudo certbot certificates`

### Quarterly Tasks
- Security audit of server configuration
- Performance optimization review
- Database optimization (if applicable)
- Update dependencies: `npm outdated`

### Annual Tasks
- Major version updates planning
- Disaster recovery testing
- Security hardening review
- Infrastructure scaling evaluation

---

**Last Updated**: May 2026
**Maintained by**: Cherrinet Development Team
