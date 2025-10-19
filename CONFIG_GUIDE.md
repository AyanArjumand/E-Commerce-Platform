# 🔧 Configuration Guide - No .env Required

This application has been configured with **hardcoded credentials** for test/demo purposes.

## ⚠️ Important Notice

**This configuration is ONLY for testing/demo purposes!**
- Credentials are hardcoded in the source code
- Never use this approach in production
- The database connection is exposed in the code

## 📁 Configuration Files

### Backend Configuration
**File:** `backend/config/env.js`

This file contains all backend configuration:
- MongoDB URI (Coolify database)
- JWT Secret
- Stripe API keys
- Server port
- CORS settings

### Frontend Configuration
**File:** `frontend/src/config/env.js`

This file contains frontend API URL:
- Default: `http://localhost:5000/api` (for local testing)
- **UPDATE THIS** when you deploy to Coolify with your backend URL

## 🚀 Deployment to Coolify

### Step 1: Push Changes to GitHub

```bash
git add .
git commit -m "Remove .env dependency - hardcode config for test"
git push origin main
```

### Step 2: Deploy in Coolify

1. Go to your Coolify dashboard
2. Select your application
3. Click "Redeploy"
4. Wait for build to complete

### Step 3: Update Frontend API URL

After backend is deployed, you'll get a URL like:
`https://your-backend-app.coolify-domain.com`

Update `frontend/src/config/env.js`:

```javascript
export const API_CONFIG = {
  API_URL: 'https://your-backend-app.coolify-domain.com/api',
};
```

Then commit and push:

```bash
git add frontend/src/config/env.js
git commit -m "Update API URL for Coolify deployment"
git push origin main
```

### Step 4: Seed Database

Once backend is deployed, seed the database:

```bash
# SSH into your Coolify server or use Coolify's terminal
docker exec -it <backend-container-name> sh

# Inside the container, run:
node seedData.js
exit
```

Or if you have direct access to the server:

```bash
cd /path/to/backend
node seedData.js
```

## 📝 What Changed?

### Removed:
- ❌ `dotenv` package dependency
- ❌ `process.env.*` references
- ❌ `.env` file requirement
- ❌ `dotenv.config()` calls

### Added:
- ✅ `backend/config/env.js` - Hardcoded backend config
- ✅ `frontend/src/config/env.js` - Hardcoded frontend config
- ✅ Direct import of config in all files

### Modified Files:
1. `backend/server.js` - Uses `config` instead of `process.env`
2. `backend/config/db.js` - Uses `config.MONGODB_URI`
3. `backend/controllers/authController.js` - Uses `config.JWT_SECRET`
4. `backend/middleware/authMiddleware.js` - Uses `config.JWT_SECRET`
5. `backend/controllers/orderController.js` - Uses `config.STRIPE_SECRET_KEY`
6. `backend/seedData.js` - Removed dotenv
7. `frontend/src/services/api.js` - Uses hardcoded config

## 🔐 Current Configuration

### Database
```
MongoDB URI: mongodb://root:***@24.199.105.243:5432/ecommerce
Database Name: ecommerce
Auth Source: admin
```

### Backend
```
Port: 5000
JWT Secret: ecommerce_mvp_secret_key_2025_ayans_store_test
Node Environment: production
```

### Frontend
```
API URL: http://localhost:5000/api (change after deployment)
```

## 🧪 Testing Locally

```bash
# Start MongoDB (if testing locally with different DB)
# Otherwise it will connect to Coolify MongoDB

# Start backend
cd backend
npm install
npm start

# In another terminal, start frontend
cd frontend
npm install
npm run dev

# Seed database
cd backend
node seedData.js
```

## 📊 Test Accounts

After seeding:

**Admin Account:**
- Email: admin@ecommerce.com
- Password: admin123

**User Account:**
- Email: john@example.com
- Password: password123

## 🔄 Updating Configuration

### To Change MongoDB Connection:

Edit `backend/config/env.js`:
```javascript
MONGODB_URI: 'your-new-mongodb-uri-here'
```

### To Change API URL:

Edit `frontend/src/config/env.js`:
```javascript
API_URL: 'https://your-new-backend-url.com/api'
```

### To Change JWT Secret:

Edit `backend/config/env.js`:
```javascript
JWT_SECRET: 'your-new-secret-here'
```

## 🛠️ Troubleshooting

### Backend won't start?
1. Check MongoDB connection in `backend/config/env.js`
2. Verify MongoDB is accessible from your server
3. Check Docker logs in Coolify

### Frontend can't connect to backend?
1. Update `frontend/src/config/env.js` with correct backend URL
2. Check CORS settings in `backend/config/env.js` - set `CLIENT_URL` to your frontend domain
3. Verify backend is running and accessible

### Database connection fails?
1. Verify MongoDB URI is correct
2. Check firewall rules (port 5432 should be accessible)
3. Verify credentials are correct
4. Check if MongoDB container is running in Coolify

## ✅ Deployment Checklist

- [ ] Push code to GitHub
- [ ] Deploy backend in Coolify
- [ ] Note backend URL
- [ ] Update `frontend/src/config/env.js` with backend URL
- [ ] Update `backend/config/env.js` CLIENT_URL with frontend domain
- [ ] Push frontend changes
- [ ] Deploy frontend in Coolify
- [ ] Seed database
- [ ] Test login with admin credentials
- [ ] Test placing an order
- [ ] Verify all features work

## 🎯 Next Steps

1. **Deploy backend** and get the URL
2. **Update frontend config** with backend URL
3. **Deploy frontend** 
4. **Seed database**
5. **Test the application**

---

**Last Updated:** October 20, 2025
**Configuration Type:** Hardcoded (Test/Demo Only)
