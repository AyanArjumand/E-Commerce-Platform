# ✨ AYAN's Store - Premium E-Commerce Platform

A modern, full-featured e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring secure authentication, shopping cart functionality, integrated payment processing, and advanced UI/UX with glass morphism effects, gradient animations, and smooth transitions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Key Implementations](#key-implementations)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This full-stack e-commerce platform is a production-ready MVP that demonstrates modern web development practices, secure payment integration, and scalable architecture. Built as a portfolio project, it showcases proficiency in the MERN stack, RESTful API design, authentication & authorization, and third-party API integration.

**Live Demo:** [Add your deployment URL here]  
**Portfolio:** [Add your portfolio link here]  
**LinkedIn:** [Add your LinkedIn profile here]

---

## ✨ Features

### 🔐 User Authentication & Authorization
- Secure user registration and login with JWT tokens
- Password encryption using bcrypt
- Protected routes and role-based access control (User/Admin)
- Persistent authentication with localStorage
- User profile management

### 🛍️ Product Management
- Dynamic product catalog with pagination
- Advanced search functionality
- Category-based filtering
- Product detail pages with image galleries
- Stock tracking and availability management
- Featured products section

### 🛒 Shopping Cart
- Add/remove items with quantity controls
- Real-time cart updates
- Persistent cart across sessions
- Cart badge with item count
- Automatic price calculations

### 💳 Checkout & Payments
- Multi-step checkout process
- Shipping address validation
- Stripe payment integration (test & live mode)
- Secure payment intent handling
- Order confirmation and history

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive across all devices
- Modern UI/UX with smooth animations
- Accessibility considerations
- Cross-browser compatibility

### 👨‍💼 Admin Features
- Product CRUD operations
- Order management
- User management capabilities
- Inventory tracking

---

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **React Router 6** - Client-side routing
- **Context API** - Global state management
- **Axios** - HTTP client for API requests
- **Stripe.js** - Payment processing UI
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with variables and flexbox/grid

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Stripe API** - Payment gateway integration
- **Express Validator** - Input validation and sanitization
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Auto-restart server during development
- **Git** - Version control
- **ESLint** - Code linting (optional)
- **Postman** - API testing

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                         │
│                   React SPA (Port 3000)                      │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Components → Pages → Context → Services/API       │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP Requests (Axios)
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                  EXPRESS API (Port 5000)                     │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Routes → Controllers → Models → Database          │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┴──────────────┐
         ↓                              ↓
┌──────────────────┐          ┌──────────────────┐
│  MongoDB Atlas   │          │   Stripe API     │
│  Database        │          │   (Payments)     │
└──────────────────┘          └──────────────────┘
```

### Database Schema

**Users Collection:**
- Authentication credentials (email, hashed password)
- User profile information
- Shipping address
- Role-based access control

**Products Collection:**
- Product details (name, description, price)
- Images and categories
- Stock and inventory management
- Ratings and reviews

**Carts Collection:**
- User-specific cart items
- Product references and quantities
- Automatic total calculation

**Orders Collection:**
- Order details and status
- Shipping information
- Payment confirmation
- Order history tracking

---

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher) or MongoDB Atlas account
- **Stripe Account** (for payment processing)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-platform.git
cd ecommerce-platform
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

### Configuration

1. **Backend Environment Variables**

Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
CLIENT_URL=http://localhost:3000
```

2. **Frontend Environment Variables**

Create `frontend/.env` file:
```env
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

### Database Setup

1. **Start MongoDB** (if running locally)
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

2. **Seed the database** with sample data
```bash
cd backend
npm run seed
```

This creates:
- 2 test users (1 admin, 1 regular)
- 12 sample products across 9 categories

### Running the Application

**Option 1: Using PowerShell Script (Windows)**
```powershell
.\start.ps1
```

**Option 2: Manual Start**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

**Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

### Test Credentials

**Admin Account:**
- Email: `admin@ecommerce.com`
- Password: `admin123`

**Regular User:**
- Email: `john@example.com`
- Password: `password123`

---

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/auth/profile` | Get user profile | Yes |
| PUT | `/api/auth/profile` | Update profile | Yes |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products (paginated) | No |
| GET | `/api/products/:id` | Get single product | No |
| GET | `/api/products/featured` | Get featured products | No |
| GET | `/api/products/categories` | Get all categories | No |
| POST | `/api/products` | Create product | Admin |
| PUT | `/api/products/:id` | Update product | Admin |
| DELETE | `/api/products/:id` | Delete product | Admin |

**Query Parameters for GET /api/products:**
- `search` - Search by product name/description
- `category` - Filter by category
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 12)

### Cart Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/cart` | Get user's cart | Yes |
| POST | `/api/cart` | Add item to cart | Yes |
| PUT | `/api/cart/:itemId` | Update item quantity | Yes |
| DELETE | `/api/cart/:itemId` | Remove item from cart | Yes |

### Order Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/orders` | Get all orders | Admin |
| GET | `/api/orders/myorders` | Get user's orders | Yes |
| GET | `/api/orders/:id` | Get order by ID | Yes |
| POST | `/api/orders` | Create new order | Yes |
| POST | `/api/orders/:id/create-payment-intent` | Create Stripe payment intent | Yes |
| POST | `/api/orders/:id/pay` | Process payment | Yes |
| PUT | `/api/orders/:id/status` | Update order status | Admin |

### Example API Requests

**User Registration:**
```javascript
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Add to Cart:**
```javascript
POST /api/cart
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "507f1f77bcf86cd799439011",
  "quantity": 2
}
```

**Create Order:**
```javascript
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderItems": [...],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "paymentMethod": "stripe",
  "totalPrice": 199.99
}
```

---

## 📸 Screenshots

[Add screenshots of your application here]

- Home page with featured products
- Product catalog with filters
- Product detail page
- Shopping cart
- Checkout process
- User profile
- Admin dashboard

---

## 📁 Project Structure

```
ecommerce-platform/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── productController.js  # Product CRUD operations
│   │   ├── cartController.js     # Cart management
│   │   └── orderController.js    # Order & payment processing
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification & authorization
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Product.js           # Product schema
│   │   ├── Cart.js              # Cart schema
│   │   └── Order.js             # Order schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   ├── productRoutes.js     # Product endpoints
│   │   ├── cartRoutes.js        # Cart endpoints
│   │   └── orderRoutes.js       # Order endpoints
│   ├── .env                     # Environment variables
│   ├── package.json             # Backend dependencies
│   ├── seedData.js              # Database seeding script
│   └── server.js                # Express app entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   ├── ProductCard.jsx  # Product display card
│   │   │   ├── SearchBar.jsx    # Search functionality
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── PaymentForm.jsx  # Stripe payment form
│   │   │   └── PrivateRoute.jsx # Route protection
│   │   ├── context/
│   │   │   ├── AuthContext.jsx  # Auth state management
│   │   │   └── CartContext.jsx  # Cart state management
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── Products.jsx     # Product catalog
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx         # Shopping cart
│   │   │   ├── Checkout.jsx     # Checkout process
│   │   │   ├── OrderConfirmation.jsx
│   │   │   ├── Orders.jsx       # Order history
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Signup.jsx       # Registration
│   │   │   └── Profile.jsx      # User profile
│   │   ├── services/
│   │   │   └── api.js           # Axios configuration
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles
│   ├── .env                     # Frontend environment variables
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
│
├── .gitignore
├── LICENSE
├── README.md
└── start.ps1                    # PowerShell startup script
```

---

## 🔑 Key Implementations

### 1. JWT Authentication
```javascript
// Token generation
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  expiresIn: '30d'
});

// Token verification middleware
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
};
```

### 2. Password Security
```javascript
// Pre-save hook for password hashing
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
```

### 3. Stripe Payment Integration
```javascript
// Create payment intent
const paymentIntent = await stripe.paymentIntents.create({
  amount: Math.round(order.totalPrice * 100),
  currency: 'usd',
  metadata: { orderId: order._id.toString() }
});

// Confirm payment
const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
if (paymentIntent.status === 'succeeded') {
  // Update order status and inventory
}
```

### 4. Real-time Cart Updates
```javascript
// Cart context with automatic persistence
const addToCart = async (productId, quantity) => {
  const response = await cartAPI.addToCart({ productId, quantity });
  setCart(response.data);
  localStorage.setItem('cart', JSON.stringify(response.data));
};
```

### 5. Advanced Product Search
```javascript
// MongoDB text search with filters
const products = await Product.find({
  $text: { $search: searchQuery },
  category: categoryFilter,
  price: { $gte: minPrice, $lte: maxPrice }
}).skip((page - 1) * limit).limit(limit);
```

---

## 🧪 Testing

### Manual Testing Checklist

**Authentication:**
- ✅ User registration with validation
- ✅ Login with JWT token generation
- ✅ Protected route access
- ✅ Profile updates
- ✅ Token persistence across sessions

**Product Browsing:**
- ✅ View product catalog
- ✅ Search functionality
- ✅ Category filtering
- ✅ Pagination
- ✅ Product detail views

**Shopping Cart:**
- ✅ Add items to cart
- ✅ Update quantities
- ✅ Remove items
- ✅ Cart persistence
- ✅ Price calculations

**Checkout Process:**
- ✅ Shipping address validation
- ✅ Payment processing (Stripe test mode)
- ✅ Order confirmation
- ✅ Order history

**Admin Functions:**
- ✅ Product management (CRUD)
- ✅ Order management
- ✅ Role-based access

### Testing with Stripe

Use Stripe's test card numbers:
- **Success:** 4242 4242 4242 4242
- **Declined:** 4000 0000 0000 0002
- **Requires Authentication:** 4000 0025 0000 3155

Any future expiry date and any 3-digit CVC.

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Vercel or Netlify

3. Update environment variables in deployment settings

### Backend Deployment (Heroku/Railway/Render)

1. Create `Procfile`:
```
web: node backend/server.js
```

2. Set environment variables on hosting platform

3. Deploy via Git or GitHub integration

### Database (MongoDB Atlas)

1. Create free cluster at mongodb.com/cloud/atlas
2. Whitelist IP addresses
3. Update `MONGODB_URI` with Atlas connection string

---

## 🔮 Future Enhancements

### Phase 1 (Short-term)
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Email notifications (order confirmations, shipping updates)
- [ ] Advanced product filtering (price range, ratings)
- [ ] Product image upload (Cloudinary integration)

### Phase 2 (Medium-term)
- [ ] Order tracking and status updates
- [ ] Multiple payment methods (PayPal, Apple Pay)
- [ ] Coupon and discount code system
- [ ] Inventory management dashboard
- [ ] Sales analytics and reporting

### Phase 3 (Long-term)
- [ ] Real-time chat support
- [ ] AI-powered product recommendations
- [ ] Multi-vendor marketplace support
- [ ] Mobile app (React Native)
- [ ] Internationalization (i18n)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**[Your Name]**

- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Payment processing by [Stripe](https://stripe.com)
- Inspiration from modern e-commerce platforms

---

## 📊 Project Stats

- **Total Lines of Code:** ~5,000+
- **Development Time:** [Add your timeframe]
- **Backend Endpoints:** 20+
- **React Components:** 25+
- **Database Collections:** 4
- **Third-party Integrations:** Stripe, MongoDB Atlas

---

## 🐛 Known Issues

- Stripe webhook integration pending for production
- Email service integration needed for notifications
- Image upload currently uses external URLs

See the [Issues](https://github.com/yourusername/ecommerce-platform/issues) page for a full list.

---

## 📞 Support

For support, email your.email@example.com or create an issue in the GitHub repository.

---

<div align="center">

**⭐ If you like this project, please give it a star on GitHub! ⭐**

Made with ❤️ by [Ayan Arjumand](https://ayanarjumand.me)

</div>
