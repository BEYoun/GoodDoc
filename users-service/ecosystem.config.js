module.exports = {
  apps: [
    {
      name: "users-service",
      script: "dist/index.dev.js",
      env: {
        PORT: 80,
        NODE_ENV: "production",
        USERS_SERVICE_DB_URL: "mysql://user:m1croservices@users-service-db.cehxdsaeaauc.eu-west-3.rds.amazonaws.com:3306/db?charset=UTF8",
        USER_SESSION_EXPIRY_HOURS: 1
      }
    }
  ]
};