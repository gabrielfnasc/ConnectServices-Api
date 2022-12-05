export default {
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/connectServices-api',
  port: process.env.PORT || 5050,
  jwtSecretKey: process.env.JWT_SECRET || 'tj67O==5H',
};
