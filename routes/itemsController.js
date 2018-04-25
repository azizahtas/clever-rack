var express = require('express');
var ItemRouter = express.Router();
var Item = require('../models/items');

ItemRouter.use('*',function (req, res, next) {
    console.log('Inside Item Controller!');
    next();
});

/* GET home page. */
ItemRouter.get('/', function(req, res, next) {
    res.render('item', { title: 'Item' });
  });

module.exports = ItemRouter;