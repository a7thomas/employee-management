"use strict"
app.controller('listController', ['$location', '$scope', 'adminService', '$rootScope', '$cookies',
  function($location, $scope, adminService, $rootScope, $cookies) {
    $rootScope.mode = 'logout';
    var token = $cookies.get("token");
    if (token === "admin") {
      $rootScope.profile = 'admin-home';
      adminService.list().success(function(data) {
        $scope.employees = data;
      });
      $scope.delete = function(email) {
        adminService.deleteUser(email).success(function(details) {
          adminService.list().success(function(data) {
            $scope.employees = data;
          });
        });
      }
    } else {
      $location.path('/login');
    }
  }
]);