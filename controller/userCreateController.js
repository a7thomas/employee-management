"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function saveUsers(req, res) {
  model.saveUsers(req).then(function() {
    var data= {
      errorBlock:'',
      successBlock: 'successfully registered'
    }
    res.json(data);
  }, function(e) {
      var  data = {
          successBlock:'',
          errorBlock :'email address already used'
      }
    res.json(data);
  });
}

function deleteUsers(req, res) {
  model.deleteUsers(req).then(function(data) {
    res.json({data});
  });
}

function changePassword(req, res) {
  model.changePassword(req).then(function(check) {
    if (check.n === 1) {
      var details = {
        errorBlock : '',
        successBlock : 'updated'
       }
       res.json(details);

    } else {
       var details = {
        errorBlock : 'wrong password',
        successBlock : ''
       }
       res.json(details);
    }
  }, function(e) {
    res.json(e);
  });
}

function changePic(req,res) {
  model.changePic(req).then(function(check){
    res.json(check);

  });
}

module.exports = {
  changePic: changePic,
  saveUsers: saveUsers,
  changePassword: changePassword,
  deleteUsers: deleteUsers
};