"use strict"
app.controller('changePasswordController', ['$scope', 'passwordService', '$rootScope',
  '$cookies',
  function($scope, passwordService, $rootScope, $cookies) {
    var token = $cookies.get("token");
    if (token === "admin") {
      $rootScope.profile = 'admin-home';
    } else {
      $rootScope.profile = 'user-home';
    }
    $scope.change = function() {
      var details = {
        currentPassword: $scope.currentPassword,
        newPassword: $scope.newPassword,
        confirmPassword: $scope.confirmPassword
      };
      passwordService.changePassword(details).success(function(data) {
        $scope.successBlock = data.successBlock;
        $scope.errorBlock = data.errorBlock;
      });
      $scope.currentPassword = '';
      $scope.newPassword = '';
      $scope.confirmPassword = '';
      $scope.passwordBlock.$setUntouched();
      $scope.passwordBlock.$setPristine();
    };
  }
]);

app.controller('forgotPasswordController', ['$scope', 'passwordService', '$rootScope',
  function($scope, passwordService, $rootScope) {
    $rootScope.mode = 'login';
    $scope.send = function() {
      var data = {
        email: $scope.email
      }
      passwordService.forgotPassword(data).success(function(data) {
        $scope.errorMsg = data.errorMsg;
        $scope.successMsg = data.successMsg;
      });
    }
  }
]);

app.controller('resetPasswordController', ['$location', '$scope', 'passwordService', '$rootScope',
  '$routeParams',
  function($location, $scope, passwordService, $rootScope, $routeParams) {
    $rootScope.mode = 'login';
    $scope.reset = function() {
      var data = {
        password: $scope.password,
        id: $routeParams.id
      }
      passwordService.resetPassword(data).success(function(data) {
        if (data.n === 1) {
          $location.path('/login');
        } else {
          $scope.errorBlock = ""
          window.confirm("This link is not valid");
          $location.path('/login');
        }
      });
    }
  }
]);