var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

var RackSchema = new Schema({
    Name: { type: String, required: true },
}, { collection: 'racks' });

var Rack = module.exports = mongoose.model('Rack', RackSchema, 'racks');

module.exports.getAllRacks = function (callback) {
    Rack.find({}, { __v: 0 }, callback);
};