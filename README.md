# ✨ AYAN's Store# ✨ AYAN's Store



A modern, premium e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring secure authentication, shopping cart functionality, integrated payment processing, and advanced UI/UX design.A modern, premium e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring secure authentication, shopping cart functionality, integrated payment processing, and advanced UI/UX design.



![License](https://img.shields.io/badge/license-MIT-blue.svg)![License](https://img.shields.io/badge/license-MIT-blue.svg)

![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)

![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)![React](https://img.shields.io/badge/React-18.2.0-blue.svg)



------



## 📋 Table of Contents## 📋 Table of Contents



- [Overview](#overview)- [Overview](#overview)

- [Features](#features)- [Features](#features)

- [Tech Stack](#tech-stack)- [Tech Stack](#tech-stack)

- [Getting Started](#getting-started)- [Getting Started](#getting-started)

- [Project Structure](#project-structure)- [Project Structure](#project-structure)

- [API Documentation](#api-documentation)- [API Documentation](#api-documentation)

- [License](#license)- [License](#license)



------



## 🎯 Overview## 🎯 Overview



AYAN's Store is a full-stack e-commerce platform that showcases modern web development practices with a focus on user experience, security, and scalability. The application features a premium UI with glass morphism effects, gradient animations, and smooth transitions.AYAN's Store is a full-stack e-commerce platform that showcases modern web development practices with a focus on user experience, security, and scalability. The application features a premium UI with glass morphism effects, gradient animations, and smooth transitions.



------



## ✨ Features## ✨ Features



### 🔐 User Authentication & Authorization### 🔐 User Authentication & Authorization

- Secure user registration and login with JWT tokens- Secure user registration and login with JWT tokens

- Password encryption using bcrypt- Password encryption using bcrypt

- Protected routes and role-based access control- Protected routes and role-based access control

- Persistent authentication with localStorage- Persistent authentication with localStorage

- User profile management- User profile management



### 🛍️ Product Management### 🛍️ Product Management

- Dynamic product catalog with pagination- Dynamic product catalog with pagination

- Advanced search functionality- Advanced search functionality

- Category-based filtering- Category-based filtering

- Product detail pages- Product detail pages

- Stock tracking and availability- Stock tracking and availability

- Featured products section- Featured products section



### 🛒 Shopping Cart### 🛒 Shopping Cart

- Add/remove items with quantity controls- Add/remove items with quantity controls

- Real-time cart updates- Real-time cart updates

- Persistent cart across sessions- Persistent cart across sessions

- Cart badge with item count- Cart badge with item count

- Automatic price calculations- Automatic price calculations



### 💳 Checkout & Payments### 💳 Checkout & Payments

- Multi-step checkout process- Multi-step checkout process

- Shipping address validation- Shipping address validation

- Stripe payment integration- Stripe payment integration

- Secure payment handling- Secure payment handling

- Order confirmation and history- Order confirmation and history



### 🎨 Advanced UI/UX### 🎨 Advanced UI/UX

- Glass morphism effects- Glass morphism effects

- Gradient animations- Gradient animations

- Smooth transitions- Smooth transitions

- Responsive design (mobile-first)- Responsive design (mobile-first)

- Custom fonts (Poppins & Playfair Display)- Custom fonts (Poppins & Playfair Display)

- Interactive hover effects- Interactive hover effects

- Modern color palette with purple/pink gradients- Modern color palette



------



## 🚀 Tech Stack## 🚀 Tech Stack



### Frontend### Frontend

- **React 18** - Modern UI library with hooks- **React 18** - Modern UI library with hooks

- **React Router 6** - Client-side routing- **React Router 6** - Client-side routing

- **Context API** - Global state management- **Context API** - Global state management

- **Axios** - HTTP client for API requests- **Axios** - HTTP client for API requests

- **Stripe.js** - Payment processing UI- **Stripe.js** - Payment processing UI

- **Vite** - Fast build tool and dev server- **Vite** - Fast build tool and dev server

- **CSS3** - Custom styling with advanced animations- **CSS3** - Custom styling with advanced animations



### Backend### Backend

- **Node.js** - JavaScript runtime- **Node.js** - JavaScript runtime

- **Express.js** - Web application framework- **Express.js** - Web application framework

- **MongoDB** - NoSQL database- **MongoDB** - NoSQL database

- **Mongoose** - ODM for MongoDB- **Mongoose** - ODM for MongoDB

- **JWT** - JSON Web Tokens for authentication- **JWT** - JSON Web Tokens for authentication

- **Bcrypt.js** - Password hashing- **Bcrypt.js** - Password hashing

- **Stripe API** - Payment gateway integration- **Stripe API** - Payment gateway integration

- **CORS** - Cross-origin resource sharing- **CORS** - Cross-origin resource sharing



------



## 🚦 Getting Started## 🚦 Getting Started



### Prerequisites### Prerequisites



- **Node.js** (v16 or higher)- **Node.js** (v16 or higher)

- **MongoDB** (v4.4 or higher) or MongoDB Atlas account- **MongoDB** (v4.4 or higher) or MongoDB Atlas account

- **Stripe Account** (for payment processing)- **Stripe Account** (for payment processing)



### Installation### Installation



1. **Clone the repository**1. **Clone the repository**

```bash```bash

git clone https://github.com/AyanArjumand/E-Commerce-Platform.gitgit clone https://github.com/AyanArjumand/E-Commerce-Platform.git

cd E-Commerce-Platformcd E-Commerce-Platform

``````



2. **Install all dependencies**2. **Install all dependencies**

```bash```bash

npm run install:allnpm run install:all

``````



### Configuration### Configuration



1. **Create backend `.env` file**1. **Backend Environment Variables**



Create `backend/.env`:Create `backend/.env` file:

```env```env

PORT=5000PORT=5000

MONGODB_URI=mongodb://localhost:27017/ayans-storeMONGODB_URI=mongodb://localhost:27017/ecommerce

JWT_SECRET=your_jwt_secret_key_hereJWT_SECRET=your_jwt_secret_key_here

STRIPE_SECRET_KEY=your_stripe_secret_keySTRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

```CLIENT_URL=http://localhost:3000

```

2. **Create frontend `.env` file**

2. **Frontend Environment Variables**

Create `frontend/.env`:

```envCreate `frontend/.env` file:

VITE_API_URL=http://localhost:5000/api```env

VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_keyVITE_API_URL=http://localhost:5000/api

```VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key

```

### Running the Application

### Database Setup

**Using PowerShell Script (Windows - Recommended):**

```powershell1. **Start MongoDB** (if running locally)

.\start.ps1```bash

```# Windows

net start MongoDB

**Or run manually:**

# macOS/Linux

1. **Start the backend server**sudo systemctl start mongod

```bash```

cd backend

npm run dev2. **Seed the database** with sample data

``````bash

cd backend

2. **Start the frontend development server**npm run seed

```bash```

cd frontend

npm run devThis creates:

```- 2 test users (1 admin, 1 regular)

- 12 sample products across 9 categories

3. **Access the application**

- Frontend: http://localhost:5173### Running the Application

- Backend API: http://localhost:5000

**Option 1: Using PowerShell Script (Windows)**

### Seeding the Database```powershell

.\start.ps1

To populate the database with sample products:```

```bash

cd backend**Option 2: Manual Start**

npm run seed

```Terminal 1 - Backend:

```bash

**Demo Credentials:**cd backend

- Email: `admin@ayansstore.com`npm run dev

- Password: `admin123````



---Terminal 2 - Frontend:

```bash

## 📁 Project Structurecd frontend

npm run dev

``````

E-Commerce-Platform/

├── backend/**Access the application:**

│   ├── config/- Frontend: http://localhost:3000

│   │   └── db.js              # Database connection- Backend API: http://localhost:5000

│   ├── controllers/- API Health Check: http://localhost:5000/api/health

│   │   ├── authController.js  # Authentication logic

│   │   ├── cartController.js  # Cart management### Test Credentials

│   │   ├── orderController.js # Order processing

│   │   └── productController.js # Product operations**Admin Account:**

│   ├── middleware/- Email: `admin@ecommerce.com`

│   │   └── authMiddleware.js  # JWT authentication- Password: `admin123`

│   ├── models/

│   │   ├── Cart.js            # Cart model**Regular User:**

│   │   ├── Order.js           # Order model- Email: `john@example.com`

│   │   ├── Product.js         # Product model- Password: `password123`

│   │   └── User.js            # User model

│   ├── routes/---

│   │   ├── authRoutes.js      # Auth endpoints

│   │   ├── cartRoutes.js      # Cart endpoints## 📡 API Documentation

│   │   ├── orderRoutes.js     # Order endpoints

│   │   └── productRoutes.js   # Product endpoints### Authentication Endpoints

│   ├── seedData.js            # Database seeding

│   ├── server.js              # Express server| Method | Endpoint | Description | Auth Required |

│   └── package.json|--------|----------|-------------|---------------|

│| POST | `/api/auth/signup` | Register new user | No |

├── frontend/| POST | `/api/auth/login` | User login | No |

│   ├── src/| GET | `/api/auth/profile` | Get user profile | Yes |

│   │   ├── components/        # Reusable UI components| PUT | `/api/auth/profile` | Update profile | Yes |

│   │   ├── context/           # React Context providers

│   │   ├── pages/             # Page components### Product Endpoints

│   │   ├── services/          # API service layer

│   │   ├── App.jsx| Method | Endpoint | Description | Auth Required |

│   │   ├── main.jsx|--------|----------|-------------|---------------|

│   │   └── index.css          # Global styles| GET | `/api/products` | Get all products (paginated) | No |

│   ├── index.html| GET | `/api/products/:id` | Get single product | No |

│   ├── vite.config.js| GET | `/api/products/featured` | Get featured products | No |

│   └── package.json| GET | `/api/products/categories` | Get all categories | No |

│| POST | `/api/products` | Create product | Admin |

├── setup.ps1                   # Setup script| PUT | `/api/products/:id` | Update product | Admin |

├── start.ps1                   # Start script| DELETE | `/api/products/:id` | Delete product | Admin |

├── package.json

├── LICENSE**Query Parameters for GET /api/products:**

└── README.md- `search` - Search by product name/description

```- `category` - Filter by category

- `minPrice` - Minimum price filter

---- `maxPrice` - Maximum price filter

- `page` - Page number (default: 1)

## 📚 API Documentation- `limit` - Items per page (default: 12)



### Authentication Endpoints### Cart Endpoints



| Method | Endpoint | Description | Auth Required || Method | Endpoint | Description | Auth Required |

|--------|----------|-------------|---------------||--------|----------|-------------|---------------|

| POST | `/api/auth/signup` | Register new user | No || GET | `/api/cart` | Get user's cart | Yes |

| POST | `/api/auth/login` | User login | No || POST | `/api/cart` | Add item to cart | Yes |

| GET | `/api/auth/profile` | Get user profile | Yes || PUT | `/api/cart/:itemId` | Update item quantity | Yes |

| PUT | `/api/auth/profile` | Update profile | Yes || DELETE | `/api/cart/:itemId` | Remove item from cart | Yes |



### Product Endpoints### Order Endpoints



| Method | Endpoint | Description | Auth Required || Method | Endpoint | Description | Auth Required |

|--------|----------|-------------|---------------||--------|----------|-------------|---------------|

| GET | `/api/products` | Get all products (paginated) | No || GET | `/api/orders` | Get all orders | Admin |

| GET | `/api/products/:id` | Get single product | No || GET | `/api/orders/myorders` | Get user's orders | Yes |

| GET | `/api/products/featured` | Get featured products | No || GET | `/api/orders/:id` | Get order by ID | Yes |

| POST | `/api/orders` | Create new order | Yes |

**Query Parameters:**| POST | `/api/orders/:id/create-payment-intent` | Create Stripe payment intent | Yes |

- `search` - Search by product name/description| POST | `/api/orders/:id/pay` | Process payment | Yes |

- `category` - Filter by category| PUT | `/api/orders/:id/status` | Update order status | Admin |

- `page` - Page number (default: 1)

- `limit` - Items per page (default: 12)### Example API Requests



### Cart Endpoints**User Registration:**

```javascript

| Method | Endpoint | Description | Auth Required |POST /api/auth/signup

|--------|----------|-------------|---------------|Content-Type: application/json

| GET | `/api/cart` | Get user's cart | Yes |

| POST | `/api/cart` | Add item to cart | Yes |{

| PUT | `/api/cart/:itemId` | Update item quantity | Yes |  "name": "John Doe",

| DELETE | `/api/cart/:itemId` | Remove item from cart | Yes |  "email": "john@example.com",

  "password": "password123"

### Order Endpoints}

```

| Method | Endpoint | Description | Auth Required |

|--------|----------|-------------|---------------|**Add to Cart:**

| GET | `/api/orders/myorders` | Get user's orders | Yes |```javascript

| GET | `/api/orders/:id` | Get order by ID | Yes |POST /api/cart

| POST | `/api/orders` | Create new order | Yes |Authorization: Bearer <token>

| POST | `/api/orders/:id/create-payment-intent` | Create Stripe payment intent | Yes |Content-Type: application/json

| POST | `/api/orders/:id/pay` | Process payment | Yes |

{

---  "productId": "507f1f77bcf86cd799439011",

  "quantity": 2

## 📄 License}

```

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Create Order:**

---```javascript

POST /api/orders

## 👨‍💻 AuthorAuthorization: Bearer <token>

Content-Type: application/json

**Ayan Arjumand**

{

- GitHub: [@AyanArjumand](https://github.com/AyanArjumand)  "orderItems": [...],

- Repository: [E-Commerce-Platform](https://github.com/AyanArjumand/E-Commerce-Platform)  "shippingAddress": {

    "street": "123 Main St",

---    "city": "New York",

    "state": "NY",

## 🙏 Acknowledgments    "zipCode": "10001",

    "country": "USA"

- MERN Stack Community  },

- Stripe for payment processing  "paymentMethod": "stripe",

- MongoDB Atlas for database hosting  "totalPrice": 199.99

- All open-source contributors}

```

---

---

**Built with ❤️ by Ayan Arjumand**

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
