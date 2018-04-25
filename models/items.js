var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    Name: { type: String, required: true },
}, { collection: 'items' });

var Item = module.exports = mongoose.model('Item', ItemSchema, 'items');

module.exports.getAllItems = function (callback) {
    Item.find({}, { __v: 0 }, callback);
};