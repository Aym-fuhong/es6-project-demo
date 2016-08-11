// import webpack from 'webpack';
// import webpackConfig from '../webpack.config';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import express from 'express';
var execute = require("../db/execute");
var express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// const compiler = webpack(webpackConfig);

// app.use(webpackDevMiddleware(compiler, {
//   noInfo: true,
//   lazy: false,
//   watchOptions: {
//     aggregateTimeout: 300,
//     poll: true
//   },
//   publicPath: webpackConfig.output.publicPath
// }));
//
// app.use(webpackHotMiddleware(compiler, {
//   log: console.log
// }));

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendfile(path.resolve("index.html"));
});
app.post('/login', execute.find);

app.listen(3000, function() {
  console.log('Listening on 3000');
});