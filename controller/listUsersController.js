"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function listUsers(req, res) {
  model.listUsers().then(function(data) {
  	res.json(data);
	});
}

module.exports = {
  listUsers: listUsers
};