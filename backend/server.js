const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/env');
const autoSeedDatabase = require('./utils/autoSeed');

// Connect to database and auto-seed if empty
connectDB().then(() => {
  // Auto-seed database with dummy data if it's empty
  autoSeedDatabase();
});

const app = express();

// Middleware
app.use(cors({
  origin: config.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!', 
    error: config.NODE_ENV === 'development' ? err.message : {} 
  });
});

const PORT = config.PORT || 5000;
const HOST = '0.0.0.0'; // Bind to all network interfaces

app.listen(PORT, HOST, () => {
  console.log(`✅ Server running on http://${HOST}:${PORT}`);
  console.log(`📊 Environment: ${config.NODE_ENV}`);
  console.log(`🏥 Health check: http://${HOST}:${PORT}/api/health`);
  console.log(`🚀 Ready to accept connections!`);
});
