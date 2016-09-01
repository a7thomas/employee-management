var express = require('express');
var router = express.Router();
var resetController = require('../controller/resetController');

router.post('/resetPassword/:id',function(req,res,next) {
	resetController.reset(req,res);
});

module.exports = router;

