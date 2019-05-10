require('dotenv').config()

const config = {
  server: process.env.SERVER || 'localhost',
  port: process.env.PORT || 3000,
  isDEV: process.env.NODE_ENV == "development",
  isProd: process.env.NODE_ENV == "production",
  dbsslconn: process.env.NODE_ENV != "development",
  jwtSecret: process.env.JWT_SECRET || "S3cRET~!",
  databaseUrl: process.env.DATABASE_URL || "mongodb://localhost:27017/MarsDB",
  databaseHost: process.env.DATABASE_HOST||"localhost",
  databasePort: process.env.DATABASE_PORT||"9042",
  super_user_login: process.env.SUPER_ADMIN_LOGIN || "MARSAdmin",
  super_user_password: process.env.SUPER_ADMIN_PASSWORD || "Password@1234_",
  jwt_token_expires_in: process.env.JWT_TOKEN_EXP_DURATION || "1h"
};

module.exports = config;
