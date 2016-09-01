"use strict";
var express = require('express');
var router = express.Router();
var userCreateController = require('../../controller/userCreateController');
var listUsersController = require('../../controller/listUsersController');
var programController = require('../../controller/programController');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+ '-' + Date.now()+'.jpg')
    }
});

var upload = multer({ storage: storage });

router.post('/registration',  upload.single('file'), userCreateController.saveUsers);

router.post('/changePic',  upload.single('file'), userCreateController.changePic);

router.post('/list', listUsersController.listUsers);

router.get('/list/:id', userCreateController.deleteUsers);

router.post('/changePassword', userCreateController.changePassword);

router.post('/program', programController.createProgram);

module.exports = router;