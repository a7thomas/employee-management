"use strict"
app.controller('userController', ['$scope', '$rootScope','$location', 'userUpdateService', '$cookies',
  'picUpload',
  function($scope, $rootScope,$location,userUpdateService, $cookies, picUpload) {
    $rootScope.mode = 'logout';
    var token = $cookies.get("token");
    if (token === "user") {
      $rootScope.profile = 'user-home';
      var details = JSON.parse(localStorage.details);
      $scope.details = details;
      $scope.dob = new Date(details.personalInfo.dob);
      $scope.updatePersonal = function() {
        var details = {
          firstName: $scope.details.personalInfo.firstName,
          lastName: $scope.details.personalInfo.lastName,
          address: $scope.details.personalInfo.address,
          phNo: $scope.details.personalInfo.mobileNo,
          dob: $scope.dob
        };
        userUpdateService.updateUser(details).success(function(data) {
          localStorage.details = JSON.stringify(data);
          userUpdateService.changeAttribute();
        });
      }
      $scope.updateAccount = function() {
        var details = {
          accountNo: $scope.details.accounts.acNo,
          bankName: $scope.details.accounts.bankName,
          panNo: $scope.details.accounts.panNo,
        };
        userUpdateService.updateAccount(details).success(function(data) {
          localStorage.details = JSON.stringify(data);
          userUpdateService.changeAttribute();
        });
      }
      $scope.updateEducation = function() {
        var details = {
          tenthPercentage: $scope.details.education.tenthPercentage,
          twelfthPercentage: $scope.details.education.twelfthPercentage,
          degree: $scope.details.education.degree,
          other: $scope.details.education.other
        };
        userUpdateService.updateEducation(details).success(function(data) {
          localStorage.details = JSON.stringify(data);
          userUpdateService.changeAttribute();
        });
      }
      $scope.changePic = function() {
        var file = $scope.myFile;
        if (file != null) {
          var uploadUrl = "/admin/changePic";
          picUpload.uploadFileToUrl(file, uploadUrl).success(function(
            data) {
            localStorage.details = JSON.stringify(data);
            $scope.details.imagePath = data.imagePath;
          });
        } else {
          
        }
      }
    } else {
      $location.path('/login');
    }
  }
]);