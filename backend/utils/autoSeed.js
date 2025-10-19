const User = require('./models/User');
const Product = require('./models/Product');

/**
 * Auto-seed database with dummy data if empty
 * This runs automatically on server startup
 */
const autoSeedDatabase = async () => {
  try {
    // Check if data already exists
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();

    if (userCount > 0 && productCount > 0) {
      console.log('✅ Database already contains data. Skipping auto-seed.');
      return;
    }

    console.log('🌱 Database is empty. Starting auto-seed...');

    // Seed users if empty
    if (userCount === 0) {
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
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: 'password123',
          role: 'user'
        }
      ];

      await User.insertMany(users);
      console.log('✅ Users seeded successfully');
    }

    // Seed products if empty
    if (productCount === 0) {
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
          name: 'Laptop Backpack',
          description: 'Durable backpack with padded laptop compartment, USB charging port, and water-resistant material. Fits up to 15.6" laptops.',
          price: 49.99,
          category: 'Accessories',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
          images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'],
          stock: 100,
          brand: 'TravelGear',
          rating: 4.3,
          numReviews: 203,
          featured: false
        },
        {
          name: 'Wireless Mouse',
          description: 'Ergonomic wireless mouse with precision tracking and long battery life. Perfect for both work and gaming.',
          price: 24.99,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
          images: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'],
          stock: 75,
          brand: 'TechGear',
          rating: 4.4,
          numReviews: 156,
          featured: false
        },
        {
          name: 'Premium Coffee Maker',
          description: 'Programmable coffee maker with thermal carafe, brew strength control, and auto shut-off. Makes perfect coffee every time.',
          price: 79.99,
          category: 'Home & Kitchen',
          image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
          images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500'],
          stock: 45,
          brand: 'BrewMaster',
          rating: 4.6,
          numReviews: 312,
          featured: true
        },
        {
          name: 'Yoga Mat Pro',
          description: 'Extra thick non-slip yoga mat with carrying strap. Eco-friendly material, perfect for yoga, pilates, and floor exercises.',
          price: 34.99,
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
          images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500'],
          stock: 60,
          brand: 'FitLife',
          rating: 4.5,
          numReviews: 98,
          featured: false
        },
        {
          name: 'LED Desk Lamp',
          description: 'Adjustable LED desk lamp with touch control, multiple brightness levels, and USB charging port. Modern minimalist design.',
          price: 39.99,
          category: 'Home & Office',
          image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
          images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'],
          stock: 80,
          brand: 'LightPro',
          rating: 4.4,
          numReviews: 145,
          featured: false
        },
        {
          name: 'Portable Bluetooth Speaker',
          description: '360° sound, waterproof design, 12-hour battery life. Perfect for outdoor adventures and parties.',
          price: 59.99,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
          images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'],
          stock: 55,
          brand: 'SoundWave',
          rating: 4.6,
          numReviews: 234,
          featured: true
        },
        {
          name: 'Running Shoes',
          description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Perfect for daily runs and marathons.',
          price: 119.99,
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
          images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
          stock: 40,
          brand: 'RunFast',
          rating: 4.7,
          numReviews: 567,
          featured: true
        },
        {
          name: 'Stainless Steel Water Bottle',
          description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof.',
          price: 29.99,
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
          images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'],
          stock: 90,
          brand: 'HydroLife',
          rating: 4.5,
          numReviews: 178,
          featured: false
        },
        {
          name: 'Mechanical Keyboard RGB',
          description: 'Gaming mechanical keyboard with customizable RGB lighting, tactile switches, and programmable keys.',
          price: 149.99,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500',
          images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?w=500'],
          stock: 30,
          brand: 'GameTech',
          rating: 4.8,
          numReviews: 423,
          featured: true
        },
        {
          name: 'Air Purifier',
          description: 'HEPA air purifier removes 99.97% of allergens, dust, and odors. Quiet operation with sleep mode. Perfect for bedrooms.',
          price: 159.99,
          category: 'Home & Kitchen',
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500',
          images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500'],
          stock: 25,
          brand: 'PureAir',
          rating: 4.6,
          numReviews: 289,
          featured: false
        }
      ];

      await Product.insertMany(products);
      console.log('✅ Products seeded successfully');
    }

    console.log('🎉 Auto-seed completed successfully!');
    console.log('📊 Database now contains:');
    console.log(`   - ${await User.countDocuments()} users`);
    console.log(`   - ${await Product.countDocuments()} products`);
    console.log('\n👤 Test Accounts:');
    console.log('   Admin: admin@ecommerce.com / admin123');
    console.log('   User: john@example.com / password123');

  } catch (error) {
    console.error('❌ Auto-seed failed:', error.message);
    // Don't exit the server if seeding fails
    console.log('⚠️  Server will continue without seeded data');
  }
};

module.exports = autoSeedDatabase;
