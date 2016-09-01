"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var model = require('../models/programModel');

function createProgram(req, res) {
  model.createProgram(req).then(function() {
    res.json({
        successBlock: 'successfull',
        errorBlock: ''
        });
  }, function(e) {
    var errorMsg = 'Alls fields should be filled';
    res.json({
      errorBlock: errorMsg,
      successBlock: ''
    });
  });
}

function viewProgram(req, res) {
  model.viewProgram(req).then(function(data) {
    var date = new Date;
    for (var i = 0; i < data.length; i++) {
      var id = data[i]._id;
      var programDate = data[i].programDate;
      if (date > programDate) {
        model.deleteProgram(id);
      }
    }
    res.json(data);
  });
}

module.exports = {
  viewProgram: viewProgram,
  createProgram: createProgram
};