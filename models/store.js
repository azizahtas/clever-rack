var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
    name: { type: String, required: true },
    name: { type: String, required: true },

}, { collection: 'stores' });

var Store = module.exports = mongoose.model('Store', StoreSchema, 'stores');

module.exports.getAllSotres = function (callback) {
    Store.find({}, { __v: 0 }, callback);
};

module.exports.getStoreById = function(num,callback) {
    Store.find({racknum:num}, callback);
};