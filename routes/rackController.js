var express = require('express');
var RackRouter = express.Router();
var Rack = require('../models/Rack');

RackRouter.use('*',function (req, res, next) {
    console.log('Inside Rack Controller!');
    next();
});

/* GET home page. */
RackRouter.get('/', function(req, res, next) {
    res.render('rack', { title: 'Rack' });
  });

module.exports = RackRouter;