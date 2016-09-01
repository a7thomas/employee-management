"use strict"
app.controller('adminController', ['$location', '$scope', '$rootScope', '$cookies', 'Upload',
  function($location, $scope, $rootScope, $cookies, Upload) {
    $rootScope.mode = 'logout';
    var token = $cookies.get("token");
    if (token === "admin") {
      $rootScope.profile = 'admin-home';
      $scope.add = function(file) {
        file.upload = Upload.upload({
          url: '/admin/registration',
          data: {
            name: $scope.name,
            email: $scope.email,
            designation: $scope.designation,
            phNo: $scope.phNo,
            gender: $scope.gender,
            userType: $scope.userType,
            file: file
          },
        }).success(function(data) {
          $scope.errorBlock = data.errorBlock;
          $scope.successBlock = data.successBlock;
        });
        $scope.name = '';
        $scope.email = '';
        $scope.designation = '';
        $scope.phNo = '';
        $scope.successBlock = '';
        $scope.newRegister.$setUntouched();
        $scope.newRegister.$setPristine();
      };
    } else {
      $location.path('/login');
    }
  }
]);