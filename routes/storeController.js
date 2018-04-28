var express = require('express');
var StoreRouter = express.Router();
var Store = require('../models/store');

StoreRouter.use('*',function (req, res, next) {
    console.log('Inside Store Controller!');
    next();
});

/* GET home page. */
StoreRouter.get('/', function(req, res, next) {

    Store.getAllSotres(function(err,data){
        if(err) {
            console.log('Error In Getting all stores');
            console.log(err);
        } else {
            console.log('found data: ' + JSON.stringify(data));
            var jsnoData = JSON.parse(JSON.stringify(data)); 
            res.render('stores', { title: 'Stores', stores : jsnoData });
        }
    });
});
  
/* GET home page. */
StoreRouter.get('/getstores', function(req, res, next) {
    res.render('stores', { title: 'Stores' });
});

module.exports = StoreRouter;