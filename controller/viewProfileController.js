"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function viewUsers(req, res) {
  model.viewUsers(req.body).then(function(data) {
    var token = 'token';
    var info = 'info';
    if(data!= null){
      if (data.userType === 'user') {
        res.cookie(token, 'user');
        res.cookie(info, data);
      }
      if (data.userType === 'admin') {
        res.cookie(token, 'admin');
        res.cookie(info, data);
      }     
      res.json(data);
    } else {
        res.json(data);
    } 
  }, function(e) {
    res.json(e);
  });
}

module.exports = {
  viewUsers: viewUsers,
};