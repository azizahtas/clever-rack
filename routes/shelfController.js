var express = require('express');
var ShelfRouter = express.Router();
var Shelf = require('../models/shelves');
var Store = require('../models/store');

ShelfRouter.use('*',function (req, res, next) {
    console.log('Inside Shelf Controller!');
    next();
});

/* GET home page. */
ShelfRouter.get('/', function(req, res, next) {
    res.render('shelf', { title: 'Shelf' });
  })
  .get('/:_num',function (req, res) {
        var id = req.params['_num'];
        Store.getStoreById(id,function (err,data) {
            if(err){console.log('Error :'+err); res.json({'status': 'Error', 'msg' : 'Error Selecting Shelf with Id : '+id, 'data':[]});}
            else{
                //console.log('found data: ' + JSON.stringify(data));
                var jsnoData = JSON.parse(JSON.stringify(data)); 
                res.render('shelf', { title: 'Shelves',  store: jsnoData[0]});
            }
        });
    });

module.exports = ShelfRouter;