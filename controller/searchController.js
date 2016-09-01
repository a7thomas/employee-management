"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function searchUsers(req, res) {
  model.searchUsers(req.body).then(function(data) {
    res.json(data);
  }, function(e) {
    res.render('search', {
      found: 'Database not working'
    });
  });
}

module.exports = {
  searchUsers: searchUsers,
};