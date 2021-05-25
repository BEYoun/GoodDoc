module.exports = {
  apps: [
    {
      name: "api-gateway",
      script: "dist/index.js",
      env: {
        PORT: 80,
        NODE_ENV: "production"
      }
    }
  ]
};