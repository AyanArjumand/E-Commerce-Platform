// Hardcoded configuration for test/demo purposes
// WARNING: Never use hardcoded credentials in production!

module.exports = {
  PORT: 5000,
  MONGODB_URI: 'mongodb://root:AlhDMwlMuLPiqveQYkkd30d3w6ukUwIG5wAKDbcJpiG1da11OwOLR9hVrGSdksDm@24.199.105.243:5432/ecommerce?directConnection=true&authSource=admin',
  JWT_SECRET: 'ecommerce_mvp_secret_key_2025_ayans_store_test',
  STRIPE_SECRET_KEY: 'sk_test_your_stripe_secret_key_here',
  CLIENT_URL: 'http://localhost:3000',
  NODE_ENV: 'production'
};
