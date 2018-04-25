var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

var ShelfSchema = new Schema({
    Name: { type: String, required: true },
}, { collection: 'shelves' });

var Shelf = module.exports = mongoose.model('Shelf', ShelfSchema, 'shelves');

module.exports.getAllShelves = function (callback) {
    Shelf.find({}, { __v: 0 }, callback);
};