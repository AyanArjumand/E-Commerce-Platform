# 🚀 Deploying AYAN's Store on Coolify

This guide will help you deploy AYAN's Store e-commerce platform on Coolify.

## 📋 Prerequisites

1. Coolify server installed and running
2. GitHub repository connected to Coolify
3. Domain name (optional but recommended)
4. Stripe account for payment processing

## 🔧 Deployment Steps

### 1. Prepare Your Repository

Ensure all Docker files are committed to your repository:
- `Dockerfile` (root)
- `docker-compose.yml`
- `backend/Dockerfile`
- `frontend/Dockerfile`
- `frontend/nginx.conf`
- `.dockerignore`
- `.env.example`

### 2. Create Application in Coolify

1. Log in to your Coolify dashboard
2. Click on "New Resource" → "Application"
3. Select your GitHub repository
4. Choose the branch (main/master)
5. Select "Docker Compose" as the build pack

### 3. Configure Environment Variables

In Coolify, add the following environment variables:

#### MongoDB Settings
```
MONGO_USERNAME=admin
MONGO_PASSWORD=<generate-secure-password>
MONGODB_URI=mongodb://admin:<password>@mongodb:27017/ayans-store?authSource=admin
```

#### Backend Settings
```
NODE_ENV=production
PORT=5000
JWT_SECRET=<generate-secure-random-string>
CORS_ORIGIN=https://yourdomain.com
```

#### Stripe Configuration
```
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
```

#### Frontend Settings
```
VITE_API_URL=https://api.yourdomain.com/api
```

### 4. Configure Ports and Domains

#### Backend Service
- Container Port: `5000`
- Public Port: `5000` or custom
- Domain: `api.yourdomain.com` (optional)

#### Frontend Service
- Container Port: `3000`
- Public Port: `80` or `443`
- Domain: `yourdomain.com`

### 5. Deploy the Application

1. Click "Deploy" button in Coolify
2. Monitor the build logs
3. Wait for all services to be healthy

### 6. Seed the Database (First Time Only)

After successful deployment, seed the database:

```bash
# Access the backend container
docker exec -it ayans-store-backend sh

# Run seed script
node seedData.js

# Exit container
exit
```

### 7. Configure SSL/TLS

Coolify automatically handles SSL with Let's Encrypt:
1. Go to your application settings
2. Enable "SSL/TLS"
3. Select "Let's Encrypt"
4. Wait for certificate generation

## 🔒 Security Checklist

- [ ] Change all default passwords
- [ ] Generate strong JWT_SECRET (use: `openssl rand -base64 32`)
- [ ] Use production Stripe keys
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS_ORIGIN with your actual domain
- [ ] Set up firewall rules
- [ ] Enable MongoDB authentication
- [ ] Regular backups configured

## 📊 Monitoring

### Health Check Endpoints

- Backend: `https://api.yourdomain.com/api/health`
- Frontend: `https://yourdomain.com/health`
- MongoDB: Check via Coolify logs

### View Logs

```bash
# Backend logs
docker logs ayans-store-backend -f

# Frontend logs
docker logs ayans-store-frontend -f

# MongoDB logs
docker logs ayans-store-mongodb -f
```

## 🔄 Updating the Application

Coolify supports automatic deployments:

1. **Enable Auto Deploy:**
   - Go to application settings
   - Enable "Auto Deploy"
   - Select branch to monitor

2. **Manual Deploy:**
   - Push changes to GitHub
   - Click "Redeploy" in Coolify

## 🗄️ Database Backup

### Manual Backup

```bash
# Create backup
docker exec ayans-store-mongodb mongodump \
  --username=admin \
  --password=<your-password> \
  --authenticationDatabase=admin \
  --db=ayans-store \
  --out=/backup

# Copy backup from container
docker cp ayans-store-mongodb:/backup ./mongodb-backup
```

### Restore Backup

```bash
# Copy backup to container
docker cp ./mongodb-backup ayans-store-mongodb:/backup

# Restore
docker exec ayans-store-mongodb mongorestore \
  --username=admin \
  --password=<your-password> \
  --authenticationDatabase=admin \
  --db=ayans-store \
  /backup/ayans-store
```

## 🐛 Troubleshooting

### Common Issues

1. **Connection Refused**
   - Check if all services are running
   - Verify network configuration
   - Check environment variables

2. **Database Connection Failed**
   - Verify MongoDB is healthy
   - Check MONGODB_URI format
   - Ensure authentication credentials are correct

3. **Frontend Can't Connect to Backend**
   - Verify VITE_API_URL is correct
   - Check CORS_ORIGIN settings
   - Ensure backend is accessible

4. **Build Failures**
   - Check Docker logs
   - Verify all dependencies in package.json
   - Ensure Dockerfile paths are correct

### View Service Status

```bash
# Check all containers
docker ps

# Check specific service
docker ps | grep ayans-store
```

## 📱 Test Credentials

After deployment, use these credentials to test:

- Email: `admin@ayansstore.com`
- Password: `admin123`

**⚠️ Important:** Change the admin password immediately after first login!

## 🎯 Performance Optimization

1. **Enable Caching:**
   - Nginx caching is pre-configured
   - Consider adding Redis for session storage

2. **Database Indexing:**
   - Indexes are created automatically
   - Monitor slow queries

3. **CDN Integration:**
   - Consider using Cloudflare for static assets
   - Enable compression

## 📞 Support

For issues specific to:
- **Coolify:** Check Coolify documentation
- **Application:** Open an issue on GitHub
- **Stripe:** Contact Stripe support

## 🎉 Success!

Your AYAN's Store e-commerce platform should now be live!

- Frontend: https://yourdomain.com
- Backend API: https://api.yourdomain.com
- Admin Panel: https://yourdomain.com/profile

---

**Built with ❤️ by Ayan Arjumand**
