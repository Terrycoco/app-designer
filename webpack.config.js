//setup for webpack
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [

    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true, //needed for react-router to work
    contentBase: './',
    hot: true  //enable hot module plugin
  },

  //set up for babel translator
  module: {
    loaders:
    [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=25000'
    },
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!css-loader!postcss-loader'
    }
  ]
  },
  postcss: function (webpack) {
    return [
      require("postcss-import")(),
      require("postcss-cssnext")()
    ];
  },
  resolve: {
    alias: {
      components:   path.resolve(__dirname, 'src', 'components'),
      reducers:     path.resolve(__dirname, 'src', 'reducers'),
      actions:      path.resolve(__dirname, 'src', 'actions'),
      styles:       path.resolve(__dirname, 'src', 'styles'),
      images:       path.resolve(__dirname, 'src', 'images'),
      pages:        path.resolve(__dirname, 'src', 'pages'),
      lib:          path.resolve(__dirname, 'src', 'lib'),
      utils:        path.resolve(__dirname, 'src', 'utils'),
      examples:     path.resolve(__dirname, 'src', 'examples')
    },
    extensions: ['','.js', '.jsx', 'css']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]


};
