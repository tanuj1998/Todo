var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'

  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias:{
      applicationStyles: 'app/styles/app.scss',
      TodoApp: 'app/components/TodoApp.jsx',
      Todo: 'app/components/Todo.jsx',
      TodoList: 'app/components/TodoList.jsx',
      AddTodo: 'app/components/AddTodo.jsx',
      Search: 'app/components/Search.jsx',
      Api: 'app/components/Api.jsx',
      app: 'app',

      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      store_config: 'app/store/store_config.jsx'
      },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-3']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  }
};
