const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.SERVICES_URI': JSON.stringify('http://52.47.91.174'),
    }),
  ],
}
