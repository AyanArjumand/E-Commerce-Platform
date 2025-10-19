# 🐳 Docker Deployment Guide for AYAN's Store

Complete Docker setup for deploying AYAN's Store on Coolify or any Docker-compatible platform.

## 📦 What's Included

- ✅ Multi-stage Dockerfiles for optimized builds
- ✅ Docker Compose for local development and testing
- ✅ Nginx configuration for frontend
- ✅ Health checks for all services
- ✅ Security best practices
- ✅ Production-ready configuration

## 🚀 Quick Start

### Local Development with Docker

1. **Clone the repository**
```bash
git clone https://github.com/AyanArjumand/E-Commerce-Platform.git
cd E-Commerce-Platform
```

2. **Create environment file**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Build and start services**
```bash
docker-compose up -d
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

5. **View logs**
```bash
docker-compose logs -f
```

6. **Stop services**
```bash
docker-compose down
```

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│           Nginx (Frontend)              │
│         Port 3000 (HTTP/HTTPS)          │
└──────────────┬──────────────────────────┘
               │
               │ API Requests
               ↓
┌─────────────────────────────────────────┐
│       Node.js (Backend API)             │
│           Port 5000                      │
└──────────────┬──────────────────────────┘
               │
               │ Database Queries
               ↓
┌─────────────────────────────────────────┐
│         MongoDB Database                │
│           Port 27017                     │
└─────────────────────────────────────────┘
```

## 📋 Docker Files Overview

### 1. `Dockerfile` (Root - Full Stack)
Multi-stage build combining frontend and backend for simple deployments.

### 2. `backend/Dockerfile`
Optimized Node.js backend image with:
- Alpine Linux for minimal size
- Non-root user for security
- Health checks
- Production dependencies only

### 3. `frontend/Dockerfile`
Two-stage build process:
- Stage 1: Build React app with Vite
- Stage 2: Serve with Nginx
- Includes caching and compression

### 4. `docker-compose.yml`
Orchestrates all services:
- MongoDB database
- Backend API
- Frontend application
- Networking and volumes

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB
MONGO_USERNAME=admin
MONGO_PASSWORD=your_secure_password
MONGODB_URI=mongodb://admin:your_secure_password@mongodb:27017/ayans-store?authSource=admin

# Backend
NODE_ENV=production
PORT=5000
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_your_key
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key

# Frontend
VITE_API_URL=http://localhost:5000/api
```

### Build Individual Services

```bash
# Build backend only
docker build -t ayans-store-backend ./backend

# Build frontend only
docker build -t ayans-store-frontend ./frontend

# Build full stack
docker build -t ayans-store .
```

## 🌐 Coolify Deployment

### Step 1: Prepare Repository

Ensure all Docker files are committed:
```bash
git add Dockerfile docker-compose.yml backend/Dockerfile frontend/Dockerfile
git commit -m "Add Docker configuration"
git push origin main
```

### Step 2: Create Application in Coolify

1. Login to Coolify dashboard
2. Click "New Resource" → "Application"
3. Connect your GitHub repository
4. Select branch: `main`
5. Build Pack: "Docker Compose"

### Step 3: Configure Environment Variables

In Coolify dashboard, add all environment variables from `.env.example`.

**Important:** Update these for production:
- `CORS_ORIGIN` → Your actual domain
- `VITE_API_URL` → Your API domain
- Use production Stripe keys
- Generate secure `JWT_SECRET`

### Step 4: Configure Domains

#### Frontend
- Container Port: `3000`
- Domain: `yourdomain.com`

#### Backend
- Container Port: `5000`
- Domain: `api.yourdomain.com`

### Step 5: Deploy

Click "Deploy" and monitor the build logs.

### Step 6: Seed Database

After first deployment:
```bash
# Access backend container
docker exec -it ayans-store-backend sh

# Run seed
node seedData.js

# Exit
exit
```

## 🔍 Health Checks

All services include health checks:

### Backend
```bash
curl http://localhost:5000/api/health
# Response: {"status":"Server is running","timestamp":"..."}
```

### Frontend
```bash
curl http://localhost:3000/health
# Response: healthy
```

### MongoDB
```bash
docker exec ayans-store-mongodb mongosh --eval "db.adminCommand('ping')"
```

## 📊 Monitoring

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
```

### Check Container Status

```bash
docker-compose ps
```

### Resource Usage

```bash
docker stats ayans-store-backend ayans-store-frontend ayans-store-mongodb
```

## 🗄️ Database Management

### Backup

```bash
# Create backup directory
mkdir -p ./backups

# Backup database
docker exec ayans-store-mongodb mongodump \
  --username=admin \
  --password=<password> \
  --authenticationDatabase=admin \
  --db=ayans-store \
  --out=/backup

# Copy to host
docker cp ayans-store-mongodb:/backup ./backups/$(date +%Y%m%d-%H%M%S)
```

### Restore

```bash
# Copy backup to container
docker cp ./backups/<backup-folder> ayans-store-mongodb:/restore

# Restore
docker exec ayans-store-mongodb mongorestore \
  --username=admin \
  --password=<password> \
  --authenticationDatabase=admin \
  --db=ayans-store \
  /restore/ayans-store
```

## 🔒 Security Best Practices

1. **Change Default Passwords**
   - MongoDB admin password
   - JWT secret key
   - Admin user password

2. **Use Production Keys**
   - Stripe production keys
   - Strong JWT secret

3. **Enable HTTPS**
   - Coolify handles this automatically
   - Or use Nginx reverse proxy

4. **Firewall Rules**
   - Only expose necessary ports
   - Block direct MongoDB access

5. **Environment Variables**
   - Never commit `.env` files
   - Use Coolify's environment management

## 🐛 Troubleshooting

### Container Won't Start

```bash
# Check logs
docker-compose logs <service-name>

# Inspect container
docker inspect ayans-store-backend
```

### Connection Issues

```bash
# Check network
docker network ls
docker network inspect e-commerce-platform_ayans-store-network

# Test connectivity
docker exec ayans-store-backend ping mongodb
```

### Port Conflicts

```bash
# Check ports in use
netstat -tulpn | grep LISTEN

# Change ports in docker-compose.yml
```

### Database Connection Failed

1. Verify MongoDB is running: `docker-compose ps`
2. Check MONGODB_URI format
3. Verify credentials
4. Check network connectivity

### Build Failures

1. Clear Docker cache: `docker system prune -a`
2. Check Dockerfile syntax
3. Verify all files exist
4. Check disk space: `df -h`

## 📈 Performance Optimization

### Frontend
- ✅ Nginx compression enabled
- ✅ Static asset caching
- ✅ Production build optimized

### Backend
- ✅ Production dependencies only
- ✅ Alpine Linux for minimal size
- ✅ Health checks configured

### Database
- ✅ Persistent volumes
- ✅ Authentication enabled
- ✅ Connection pooling

## 🔄 CI/CD Integration

### GitHub Actions Example

```yaml
name: Deploy to Coolify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Trigger Coolify Deployment
        run: |
          curl -X POST ${{ secrets.COOLIFY_WEBHOOK_URL }}
```

## 📦 Image Sizes

Optimized image sizes:
- Backend: ~150MB (Alpine base)
- Frontend: ~50MB (Nginx + static files)
- MongoDB: ~700MB (official image)

## 🎯 Production Checklist

Before deploying to production:

- [ ] Environment variables configured
- [ ] Production Stripe keys added
- [ ] Strong JWT secret generated
- [ ] MongoDB password changed
- [ ] CORS_ORIGIN updated
- [ ] SSL/HTTPS enabled
- [ ] Health checks working
- [ ] Database backup configured
- [ ] Monitoring set up
- [ ] Admin password changed
- [ ] Firewall rules configured
- [ ] Domain DNS configured
- [ ] Test payment flow
- [ ] Load testing completed

## 📞 Support

- **Docker Issues:** Check Docker documentation
- **Coolify Issues:** Coolify community
- **Application Issues:** GitHub Issues

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Coolify Documentation](https://coolify.io/docs)
- [MongoDB Docker](https://hub.docker.com/_/mongo)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

**Built with ❤️ by Ayan Arjumand**
