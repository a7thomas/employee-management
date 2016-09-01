"use strict";
var express = require('express');
var router = express.Router();
var model = require('../models/userModels');

function updateUsers(req, res) {
  model.updateUsers(req).then(function(data) {
    res.json(data);
  });
}

function updateEducation(req, res) {
  model.updateEducation(req).then(function(data) {
    res.json(data);
  });
}

function updateAccount(req, res) {
  model.updateAccount(req).then(function(data) {
    res.json(data);
  });
}


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  secureConnection: true, 
  port: 465,
  auth: {
    user: "a555thomas@gmail.com",
    pass: "November241994"
  }
});

function forgotPassword(req, res) {
  if (req.body.email ==='') {
    res.json({errorMsg:'Enter field',successMsg:''});
  } else {
    model.checkUser(req).then(function(data) {
      if (data != null) {
        var mailOptions = {
          from: '"Admin " <Admin@inc.com>', 
          to: data.email, 
          subject: 'Reset password ',
          text: 'Click the link to reset password http://10.4.3.130:3000/#/reset-password/'+data.token
        };
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            return console.log(error);
            res.json({ errorMsg:'error',successMsg:''});
          }
          console.log('Message sent: ' + info.response);
        });
        res.json({ errorMsg:'',successMsg:'Reset link sent'});
      } else {  
        res.json({ errorMsg:'email address not registered',successMsg:''});
      }
    });
  }
}

module.exports = {
  updateUsers: updateUsers,
  updateEducation: updateEducation,
  updateAccount: updateAccount,
  forgotPassword: forgotPassword
};