var path =  require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.html$/,
      use: ['data-cy-loader']
    }]
  },
  resolveLoader: {
    alias: {
      'data-cy-loader': path.join(__dirname, 'data-cy-loader.js')
    }
  }
}
