module.exports = {
  apps: [
    {
      name: "api-gateway",
      script: "dist/index.dev.js",
      env: {
        PORT: 80,
        NODE_ENV: "production",
        CHAT_SERVICE_URI:"http://10.0.1.5",
        USERS_SERVICE_URI:"http://10.0.1.6",
        CABINETS_SERVICE_URI:"http://10.0.1.7"
      }
    }
  ]
};