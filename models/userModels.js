"use strict";
var mongoose = require('mongoose');
var schema = require('../schema');
var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(mongoose);
var userModel = mongoose.model('user', schema.userSchema);
var passwordCrypto = require('MD5');
var randtoken = require('rand-token');

function saveUsers(req) {
  var dat = req.body;
  var password = dat.email.slice(0, 4) + dat.phNo.slice(-4);
  var newUser = new userModel({
    email: dat.email,
    userType: dat.userType,
    imagePath: req.file.filename,
    password: passwordCrypto(password),
    designation: dat.designation,
    personalInfo: {
      firstName: dat.name,
      gender: dat.gender,
      mobileNo: dat.phNo
    }
  });
  return newUser.saveAsync();
}

function viewUsers(data) {
  var email = data.username.trim();
  var password = passwordCrypto(data.password);
  return userModel.findOneAsync({
    'email': email,
    'password': password
  });
}

function searchUsers(data) {
  var name = data.search.toLowerCase();
  var name1 = ".*"+name+".*";
  return userModel.findAsync({
    'userType': 'user',
    'personalInfo.firstName': {$regex : name1}
  });
}

function listUsers() {
  return userModel.findAsync({
    'userType': 'user'
  });
}

function updateUsers(req) {
  var email = req.cookies.info.email;
  userModel.updateAsync({
    'email': email
  }, {
    'personalInfo.firstName': req.body.firstName,
    'personalInfo.lastName': req.body.lastName,
    'personalInfo.dob': req.body.dob,
    'personalInfo.address': req.body.address,
    'personalInfo.mobileNo': req.body.phNo,
  });
  return userModel.findOneAsync({
    'email': email
  });
}

function updateEducation(req) {
  var email = req.cookies.info.email;
  userModel.updateAsync({
    'email': email
  }, {
    'education.tenthPercentage': req.body.tenthPercentage,
    'education.twelfthPercentage': req.body.twelfthPercentage,
    'education.degree': req.body.degree,
    'education.other': req.body.other
  });
  return userModel.findOneAsync({
    'email': email
  });
}

function updateAccount(req) {
  var email = req.cookies.info.email;
  userModel.updateAsync({
    'email': email
  }, {
    'accounts.acNo': req.body.accountNo,
    'accounts.bankName': req.body.bankName,
    'accounts.panNo': req.body.panNo
  });
  return userModel.findOneAsync({
    'email': email
  });
}

function searchedProfile(req) {
  var id = req.params.id; 
  return userModel.findOneAsync({
    '_id': id
  });
}

function deleteUsers(req) {
  var email = req.params.id;
  userModel.removeAsync({
    'email': email
  });
 return userModel.findAsync({
    'userType': 'user'
  });
}

function changePassword(req) {
  var email = req.cookies.info.email;
  var currentPassword = passwordCrypto(req.body.currentPassword);
  var newPassword = passwordCrypto(req.body.newPassword);
  var confirmPassword = passwordCrypto(req.body.confirmPassword);
  if (confirmPassword != newPassword) {
    return Promise.resolve({
      failed: 'failed'
    });
  } else {
    return userModel.updateAsync({
      'email': email,
      'password': currentPassword
    }, {
      'password': newPassword
    });
  }
}

function checkUser(req) {
  var email = req.body.email;
  var token = randtoken.generate(16);
  userModel.updateAsync({
    'email': email
  }, {
    'token': token
  });
  return userModel.findOneAsync({
    'email': email
  });
}

function reset(req) {
  var token =req.params.id;
  var password =passwordCrypto(req.body.password);
 return userModel.findOneAsync({'token':token}).then(function(data){
    if(data !== null ) {
    return userModel.updateAsync({'token':token},{'password':password,'token':''});
  } else{
      return Promise.resolve({
        n: 'failed'
      });
  }
  });
}  

function changePic(req) {
  var email = req.cookies.info.email;
  userModel.updateAsync({
    'email': email
  }, {
    'imagePath': req.file.filename
  });
  return userModel.findOneAsync({
    'email': email
  });
}

module.exports = {
  changePic: changePic,
  saveUsers: saveUsers,
  changePassword: changePassword,
  viewUsers: viewUsers,
  deleteUsers: deleteUsers,
  updateEducation: updateEducation,
  updateAccount: updateAccount,
  listUsers: listUsers,
  reset: reset,
  checkUser: checkUser,
  searchUsers: searchUsers,
  updateUsers: updateUsers,
  searchedProfile: searchedProfile
};