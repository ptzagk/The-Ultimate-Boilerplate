var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');
// var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000

// connect to database here
// mongoose.connect(process.env.MONGO_URI);
// mongoose.connection.on('error', function() {
//     console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
// });

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  setup: function(app) {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    // call api and set secret if any
    // require('./api/accounts/signin')(app);
    // app.set('super-secret', process.env.APP_SECRET)
  },
}).listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost: ' + PORT);
});
