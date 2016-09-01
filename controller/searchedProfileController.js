"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function searchedProfile(req, res) {
  model.searchedProfile(req).then(function(data) {
    res.json(data);
  });
}

module.exports = {
  searchedProfile: searchedProfile
};