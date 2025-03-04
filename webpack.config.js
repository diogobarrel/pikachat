module.exports = {
  // other configurations...
  module: {
    rules: [
      // other rules...
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules[\\/]htmlparser2[\\/]node_modules[\\/]entities[\\/]lib[\\/]generated[\\/]encode-html\.js/
        ],
      },
    ],
  },
}