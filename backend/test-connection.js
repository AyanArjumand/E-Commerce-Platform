// Quick MongoDB Connection Test
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://root:AlhDMwlMuLPiqveQYkkd30d3w6ukUwIG5wAKDbcJpiG1da11OwOLR9hVrGSdksDm@24.199.105.243:5432/ecommerce?directConnection=true&authSource=admin';

console.log('🔍 Testing MongoDB Connection...');
console.log('Host: 24.199.105.243:5432');
console.log('Database: ecommerce\n');

mongoose.connect(MONGODB_URI)
  .then((conn) => {
    console.log('✅ SUCCESS! MongoDB Connected');
    console.log('Host:', conn.connection.host);
    console.log('Database:', conn.connection.name);
    console.log('Port:', conn.connection.port);
    console.log('Connection State:', conn.connection.readyState); // 1 = connected
    
    // Test database operations
    return conn.connection.db.admin().listDatabases();
  })
  .then((result) => {
    console.log('\n📊 Available Databases:');
    result.databases.forEach(db => {
      console.log(`   - ${db.name} (${(db.sizeOnDisk / 1024 / 1024).toFixed(2)} MB)`);
    });
    
    // Close connection
    return mongoose.connection.close();
  })
  .then(() => {
    console.log('\n✅ Connection test completed successfully!');
    console.log('🎉 Your MongoDB is publicly accessible and working!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ CONNECTION FAILED!');
    console.error('Error Type:', error.name);
    console.error('Error Message:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 Possible Issues:');
      console.error('   - MongoDB service is not running');
      console.error('   - Port 5432 is blocked by firewall');
      console.error('   - Wrong host/port configuration');
    } else if (error.message.includes('Authentication failed')) {
      console.error('\n💡 Possible Issues:');
      console.error('   - Wrong username or password');
      console.error('   - User does not have access to this database');
      console.error('   - authSource is incorrect');
    } else if (error.message.includes('ETIMEDOUT') || error.message.includes('ENOTFOUND')) {
      console.error('\n💡 Possible Issues:');
      console.error('   - Host is unreachable');
      console.error('   - Network/firewall blocking connection');
      console.error('   - Wrong host address');
    }
    
    process.exit(1);
  });
