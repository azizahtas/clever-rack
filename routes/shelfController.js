var express = require('express');
var ShelfRouter = express.Router();
var Shelf = require('../models/shelves');

ShelfRouter.use('*',function (req, res, next) {
    console.log('Inside Shelf Controller!');
    next();
});

/* GET home page. */
ShelfRouter.get('/', function(req, res, next) {
    res.render('shelf', { title: 'Shelf' });
  });

module.exports = ShelfRouter;