module.exports = {
  apps: [
    {
      name: "chat-service",
      script: "dist/index.dev.js",
      env: {
        PORT: 80,
        NODE_ENV: "production",
      }
    }
  ]
};