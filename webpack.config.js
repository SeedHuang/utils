const path = require('path');

module.exports = (mode, env) => {
  let currentMode = 'development';
  if (mode === 'production' || env === 'production') {
    currentMode = 'production';
  }

  const config = {
    mode: currentMode,
    entry: {
      index: './index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './lib')
    },
    resolve: {
      extensions: ['.js']
    },
    loader: {
      rules: [
        {
          test: /\.js/,
          loader: 'babel-loader'
        }
      ]
    }
  };
  return config;
}
