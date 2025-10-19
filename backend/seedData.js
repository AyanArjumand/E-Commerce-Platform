const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const users = [
  {
    name: 'Admin User',
    email: 'admin@ecommerce.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user'
  }
];

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    stock: 50,
    brand: 'AudioTech',
    rating: 4.5,
    numReviews: 127,
    featured: true
  },
  {
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water-resistant up to 50m.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'],
    stock: 35,
    brand: 'TechWear',
    rating: 4.7,
    numReviews: 89,
    featured: true
  },
  {
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, breathable 100% organic cotton t-shirt. Available in multiple colors. Perfect for everyday wear.',
    price: 24.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
    stock: 100,
    brand: 'ComfortWear',
    rating: 4.3,
    numReviews: 234,
    featured: false
  },
  {
    name: 'Running Shoes Ultra',
    description: 'Lightweight running shoes with advanced cushioning technology. Breathable mesh upper for maximum comfort.',
    price: 119.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    stock: 45,
    brand: 'SpeedRun',
    rating: 4.6,
    numReviews: 156,
    featured: true
  },
  {
    name: 'Leather Laptop Bag',
    description: 'Professional genuine leather laptop bag with multiple compartments. Fits laptops up to 15.6 inches.',
    price: 149.99,
    category: 'Other',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'],
    stock: 25,
    brand: 'LuxLeather',
    rating: 4.8,
    numReviews: 78,
    featured: true
  },
  {
    name: 'Modern Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature. USB charging port included.',
    price: 45.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'],
    stock: 60,
    brand: 'BrightHome',
    rating: 4.4,
    numReviews: 92,
    featured: false
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Extra thick non-slip yoga mat with carrying strap. Eco-friendly materials, perfect for yoga and pilates.',
    price: 34.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500'],
    stock: 75,
    brand: 'ZenFit',
    rating: 4.5,
    numReviews: 143,
    featured: false
  },
  {
    name: 'Portable Bluetooth Speaker',
    description: '360-degree sound, waterproof design, 12-hour battery life. Perfect for outdoor adventures.',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'],
    stock: 40,
    brand: 'SoundWave',
    rating: 4.6,
    numReviews: 201,
    featured: true
  },
  {
    name: 'The Art of Programming',
    description: 'Comprehensive guide to modern software development practices. Essential reading for developers.',
    price: 39.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500',
    images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500'],
    stock: 30,
    brand: 'TechBooks',
    rating: 4.9,
    numReviews: 312,
    featured: false
  },
  {
    name: 'Organic Green Tea Set',
    description: 'Premium organic green tea collection with 6 different flavors. Each box contains 20 tea bags.',
    price: 29.99,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    images: ['https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500'],
    stock: 80,
    brand: 'GreenLeaf',
    rating: 4.7,
    numReviews: 167,
    featured: false
  },
  {
    name: 'Kids Building Blocks Set',
    description: 'Educational building blocks for children aged 3+. Includes 200 pieces in various colors and shapes.',
    price: 49.99,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500',
    images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500'],
    stock: 55,
    brand: 'PlayTime',
    rating: 4.8,
    numReviews: 423,
    featured: true
  },
  {
    name: 'Natural Face Cream',
    description: 'Anti-aging face cream with natural ingredients. Suitable for all skin types. 50ml jar.',
    price: 34.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500',
    images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500'],
    stock: 65,
    brand: 'PureBeauty',
    rating: 4.6,
    numReviews: 198,
    featured: false
  }
];

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    await User.insertMany(users);
    await Product.insertMany(products);

    console.log('Data Imported Successfully!');
    console.log('----------------------------');
    console.log('Test Users:');
    console.log('Admin: admin@ecommerce.com / admin123');
    console.log('User: john@example.com / password123');
    console.log('----------------------------');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error('Error destroying data:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
