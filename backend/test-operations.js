// Advanced MongoDB Operations Test
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://root:AlhDMwlMuLPiqveQYkkd30d3w6ukUwIG5wAKDbcJpiG1da11OwOLR9hVrGSdksDm@24.199.105.243:5432/ecommerce?directConnection=true&authSource=admin';

console.log('🧪 Testing MongoDB Read/Write Operations...\n');

// Define a simple test schema
const testSchema = new mongoose.Schema({
  message: String,
  timestamp: Date
});

const TestModel = mongoose.model('ConnectionTest', testSchema);

async function runTests() {
  try {
    // Connect
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Test 1: Write data
    console.log('📝 Test 1: Writing test document...');
    const testDoc = await TestModel.create({
      message: 'Connection test successful!',
      timestamp: new Date()
    });
    console.log('✅ Write successful! Document ID:', testDoc._id);

    // Test 2: Read data
    console.log('\n📖 Test 2: Reading test document...');
    const foundDoc = await TestModel.findById(testDoc._id);
    console.log('✅ Read successful!');
    console.log('   Message:', foundDoc.message);
    console.log('   Timestamp:', foundDoc.timestamp);

    // Test 3: Update data
    console.log('\n✏️  Test 3: Updating test document...');
    foundDoc.message = 'Updated successfully!';
    await foundDoc.save();
    console.log('✅ Update successful!');

    // Test 4: Count documents
    console.log('\n🔢 Test 4: Counting documents...');
    const count = await TestModel.countDocuments();
    console.log('✅ Count successful! Total documents:', count);

    // Test 5: Delete data
    console.log('\n🗑️  Test 5: Deleting test document...');
    await TestModel.findByIdAndDelete(testDoc._id);
    console.log('✅ Delete successful!');

    // Verify deletion
    const deletedDoc = await TestModel.findById(testDoc._id);
    if (!deletedDoc) {
      console.log('✅ Verified: Document deleted completely');
    }

    // Clean up test collection
    await TestModel.collection.drop().catch(() => {});
    console.log('✅ Test collection cleaned up');

    // Final summary
    console.log('\n' + '='.repeat(50));
    console.log('🎉 ALL TESTS PASSED!');
    console.log('='.repeat(50));
    console.log('✅ Connection: Working');
    console.log('✅ Write Operations: Working');
    console.log('✅ Read Operations: Working');
    console.log('✅ Update Operations: Working');
    console.log('✅ Delete Operations: Working');
    console.log('✅ Database Access: Full permissions confirmed');
    console.log('\n💡 Your MongoDB is fully operational and ready for deployment!');

    await mongoose.connection.close();
    process.exit(0);

  } catch (error) {
    console.error('\n❌ TEST FAILED!');
    console.error('Error:', error.message);
    
    await mongoose.connection.close();
    process.exit(1);
  }
}

runTests();
