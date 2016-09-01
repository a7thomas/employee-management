"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function reset(req,res) {
  model.reset(req).then(function(data){
  	res.json(data);
  }, function(e) {
  	res.json(e);
  });
} 
    
module.exports= {
  reset: reset
};