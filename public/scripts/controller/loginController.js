"use strict"
app.controller('loginController', ['$scope', 'loginService', '$location', '$rootScope', '$cookies',
  function($scope, loginService, $location, $rootScope, $cookies) {
    $cookies.remove('token');
    $cookies.remove('info');
    $rootScope.mode = 'login';
    $scope.login = function() {
      var cred = {
        username: $scope.username,
        password: $scope.password
      };
      loginService.loginUser(cred).success(function(data) {
        if (data !== null) {
          if (data.userType === 'admin') {
            $location.path('/admin-home');
          } else {
            localStorage.details = JSON.stringify(data);
            $location.path('/user-home');
          }
        } else {
          $scope.errorBlock = 'Invalid username/password'
        }
      })
    };
  }
]);