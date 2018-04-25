var express = require('express');
var StoreRouter = express.Router();
var Store = require('../models/store');

StoreRouter.use('*',function (req, res, next) {
    console.log('Inside Store Controller!');
    next();
});

/* GET home page. */
StoreRouter.get('/', function(req, res, next) {
    res.render('stores', { title: 'Stores' });
  });
  

module.exports = StoreRouter;