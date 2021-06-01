module.exports = {
  apps: [
    {
      name: "cabinets-service",
      script: "dist/index.dev.js",
      env: {
        PORT: 80,
        NODE_ENV: "production",
        CABINETS_SERVICE_DB_URL: "mysql://user:m1croservices@cabinets-service-db.cq1nkwpnyge1.eu-west-3.rds.amazonaws.com:3306/db?charset=UTF8",
        USER_SESSION_EXPIRY_HOURS: 1
      }
    }
  ]
};