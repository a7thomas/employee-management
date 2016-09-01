"use strict";
var express = require('express');
var router = express.Router();
var viewProfileController = require('../../controller/viewProfileController');
var searchController = require('../../controller/searchController');
var updateProfileController = require('../../controller/updateProfileController');
var searchedProfileController = require('../../controller/searchedProfileController');
var userCreateController = require('../../controller/userCreateController');
var programController = require('../../controller/programController')

router.post('/', viewProfileController.viewUsers);

router.post('/search', searchController.searchUsers);

router.post('/account', updateProfileController.updateAccount);

router.post('/viewprofile', updateProfileController.updateUsers);

router.get('/search/:id', searchedProfileController.searchedProfile);

router.get('/program', programController.viewProgram);

router.post('/education', updateProfileController.updateEducation);

router.post('/forgotPassword', updateProfileController.forgotPassword);

router.post('/changePassword', userCreateController.changePassword);

module.exports = router;