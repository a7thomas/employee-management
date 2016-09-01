"use strict";
var mongoose = require('mongoose');
var schema = require('../schema');
var programModel = mongoose.model('program', schema.programSchema);
var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(mongoose);

function createProgram(req) {
  var dat = req.body;
  var newProgram = new programModel({
    programName: dat.programName,
    programDate: dat.date,
    programDescription: dat.description,
    programVenue: dat.venue
  });
  return newProgram.saveAsync();
}

function viewProgram() {
  return programModel.findAsync();
}

function deleteProgram(id) {
  programModel.findByIdAndRemoveAsync({
    '_id': id
  }).then(function(dat) {
  }, function(e) {
  });
}

module.exports = {
  createProgram: createProgram,
  viewProgram: viewProgram,
  deleteProgram: deleteProgram
};