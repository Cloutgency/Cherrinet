# Quick Deployment Checklist

A quick reference guide for deploying Cherrinet to production.

---

## Pre-Deployment

- [ ] Code is committed and pushed to main branch
- [ ] All tests pass locally
- [ ] Environment variables configured
- [ ] Build tested locally: `npm run build`
- [ ] No console errors or warnings

---

## Server Initial Setup (One-time)

```bash
# 1. Connect to server
ssh root@your_server_ip

# 2. Update system
sudo apt update && sudo apt upgrade -y

# 3. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 4. Install Nginx
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# 5. Create app directory
sudo mkdir -p /var/www/cherrinet
cd /var/www/cherrinet

# 6. Clone repository
git clone YOUR_REPO_URL .

# 7. Create app user
sudo useradd -m -s /bin/bash cherrinet
sudo chown -R cherrinet:cherrinet /var/www/cherrinet

# 8. Install dependencies
pnpm install

# 9. Build application
pnpm build

# 10. Install Certbot
sudo apt install -y certbot python3-certbot-nginx
```

---

## Configure Nginx

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/cherrinet

# Copy config from DEPLOYMENT_GUIDE.md (Nginx Configuration section)

# Enable site
sudo ln -s /etc/nginx/sites-available/cherrinet /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

---

## Setup SSL Certificate

```bash
# Create certbot directory
sudo mkdir -p /var/www/certbot

# Generate certificate
sudo certbot certonly --webroot \
  -w /var/www/certbot \
  -d cherrinet.in \
  -d www.cherrinet.in \
  --email your-email@example.com \
  --agree-tos

# Reload Nginx
sudo systemctl reload nginx
```

---

## Configure DNS (at Registrar)

| Type | Name | Value |
|------|------|-------|
| A | @ | YOUR_SERVER_IP |
| A | www | YOUR_SERVER_IP |

**Wait 24-48 hours for DNS propagation**

---

## Deploy Application

```bash
# Install PM2 globally
sudo npm install -g pm2

# Create ecosystem.config.js from DEPLOYMENT_GUIDE.md

# Start application
cd /var/www/cherrinet
sudo pm2 start ecosystem.config.js
sudo pm2 save
sudo pm2 startup systemd -u cherrinet --hp /home/cherrinet

# Verify it's running
sudo pm2 list
sudo pm2 logs cherrinet-app
```

---

## Verification

```bash
# Test HTTPS
curl -I https://www.cherrinet.in

# Should return: HTTP/2 200

# Check DNS
dig cherrinet.in
dig www.cherrinet.in

# Monitor logs
tail -f /var/log/nginx/access.log
sudo pm2 logs cherrinet-app
```

---

## Future Deployments

```bash
# SSH to server
ssh cherrinet@your_server_ip

# Pull latest code
cd /var/www/cherrinet
git pull origin main

# Install any new dependencies
pnpm install

# Build
pnpm build

# Restart application
pm2 restart cherrinet-app

# Verify
curl -I https://www.cherrinet.in
```

---

## Backup Setup

```bash
# Create backup script
sudo nano /usr/local/bin/backup-cherrinet.sh

# Copy script from DEPLOYMENT_GUIDE.md

# Make executable
sudo chmod +x /usr/local/bin/backup-cherrinet.sh

# Schedule daily backups (2 AM)
sudo crontab -e
# Add: 0 2 * * * /usr/local/bin/backup-cherrinet.sh
```

---

## Troubleshooting Quick Links

- **Nginx not reloading**: Check syntax with `sudo nginx -t`
- **SSL certificate issues**: Run `sudo certbot certificates`
- **App not starting**: Check logs with `sudo pm2 logs cherrinet-app`
- **Port in use**: Find with `sudo lsof -i :3000`
- **DNS not resolving**: Wait 24-48 hours or check registrar settings

---

## Useful Commands Reference

```bash
# Status checks
sudo systemctl status nginx
sudo pm2 list
sudo pm2 logs cherrinet-app

# Restart services
sudo systemctl restart nginx
sudo pm2 restart cherrinet-app

# View logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
pm2 logs cherrinet-app

# Disk/Memory
df -h
free -h
top

# Network
curl -I https://www.cherrinet.in
dig cherrinet.in
nslookup www.cherrinet.in
```

---

## Environment Variables

Create `/var/www/cherrinet/.env`:

```env
NODE_ENV=production
VITE_API_URL=https://www.cherrinet.in
VITE_APP_NAME=Cherrinet
```

---

## Contact Information

For issues or questions:
- GitHub: [Your Repo URL]
- Email: support@cherrinet.in
- Support Portal: https://www.cherrinet.in/support

---

**Save this file for quick reference during deployments!**
