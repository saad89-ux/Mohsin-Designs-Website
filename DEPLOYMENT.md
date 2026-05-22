# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database connections tested
- [ ] Email service integrated
- [ ] API endpoints verified
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in production build
- [ ] SEO metadata complete on all pages
- [ ] 404 and error pages configured
- [ ] Analytics integrated

## Vercel Deployment (Recommended)

### 1. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub/GitLab/Bitbucket

### 2. Deploy from Git

```bash
# Push your code to GitHub
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

Then in Vercel dashboard:
- Click "New Project"
- Select your repository
- Click "Import"
- Environment variables are auto-detected
- Click "Deploy"

### 3. Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL=https://yourdomain.com
NEXT_PUBLIC_EMAIL_SERVICE=your-service
DATABASE_URL=your-database-url
```

### 4. Custom Domain

- Go to Settings → Domains
- Add your domain
- Update DNS records according to Vercel's instructions

## Docker Deployment

### 1. Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### 2. Create docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_API_URL: http://localhost:3000
```

### 3. Deploy

```bash
docker-compose up -d
```

## AWS Deployment

### Option 1: AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify init
amplify hosting add
amplify publish
```

### Option 2: AWS EC2

1. Launch EC2 instance (Ubuntu)
2. Install Node.js and npm
3. Clone your repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Start: `npm start` (or use PM2)
7. Configure nginx as reverse proxy
8. Set up SSL with Let's Encrypt

## DigitalOcean Deployment

### Using DigitalOcean App Platform

1. Connect your GitHub repository
2. Select your branch
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
4. Add environment variables
5. Click "Create Resources"

## Netlify Deployment

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## Traditional Server Deployment (Nginx)

### 1. Setup Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone repository
git clone your-repo-url
cd your-project
npm install
npm run build
```

### 2. Configure PM2

```bash
pm2 start npm --name "next-app" -- start
pm2 startup
pm2 save
```

### 3. Configure Nginx

```bash
sudo apt install nginx
```

Create `/etc/nginx/sites-available/yourdomain.com`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com
sudo certbot renew --dry-run
```

## Performance Optimization

### 1. Enable ISR (Incremental Static Regeneration)

```tsx
export const revalidate = 3600; // Revalidate every hour
```

### 2. Use Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### 3. Enable Compression

```bash
# Already enabled in Next.js production builds
```

### 4. Optimize Fonts

```tsx
// In layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

## Monitoring & Analytics

### 1. Vercel Analytics (Automatic)

Already included with Vercel deployment.

### 2. Google Analytics

Add to `layout.tsx`:

```tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `,
  }}
/>
```

### 3. Sentry Error Tracking

```bash
npm install @sentry/nextjs
```

## Backup Strategy

1. **Database Backups**: Automated daily backups
2. **Code Repository**: GitHub with branch protection
3. **Environment Variables**: Stored securely (Vercel, AWS Secrets Manager)

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables not exposed
- [ ] API rate limiting configured
- [ ] CORS properly configured
- [ ] SQL injection prevention (if using database)
- [ ] XSS protection enabled
- [ ] Security headers configured
- [ ] Regular dependency updates

## Environment Variables for Production

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://yourdomain.com
DATABASE_URL=your-secure-database-url
SENDGRID_API_KEY=your-sendgrid-key
JWT_SECRET=your-jwt-secret
```

## Rollback Strategy

### With Vercel
- Automatic rollback available in Deployments tab
- Can redeploy previous commit

### With Docker
```bash
docker-compose down
docker pull your-image:previous-tag
docker-compose up -d
```

## Performance Benchmarks

Target metrics:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

Monitor with:
- Lighthouse
- PageSpeed Insights
- WebPageTest

## Disaster Recovery

1. **Data Loss**: Automated backups stored in multiple regions
2. **Service Failure**: Auto-scaling and load balancing
3. **Security Breach**: Immediate incident response protocol

## Cost Optimization

### Vercel
- Free tier for hobby projects
- Pay-as-you-go pricing
- Average: $20-50/month

### Self-Hosted (AWS/DigitalOcean)
- Ubuntu 20.04: $5-20/month
- Database: $10-50/month
- CDN: $0-20/month
- Total: $15-90/month

## Next Steps After Deployment

1. Set up domain DNS
2. Configure SSL/TLS certificate
3. Set up monitoring and alerts
4. Configure automated backups
5. Set up CI/CD pipeline
6. Configure logging and error tracking
7. Monitor performance metrics
8. Plan scaling strategy

---

For production deployment support, contact: hello@luminamotionlabs.com
