"use strict"
app.controller('programController', ['$location', '$scope', '$rootScope', 'adminService', '$cookies',
  function($location, $scope, $rootScope, adminService, $cookies) {
    $rootScope.mode = 'logout';
    var token = $cookies.get("token");
    if (token === 'user' || token === 'admin') {
      if (token === 'user') {
        $rootScope.profile = 'user-home';
      } else {
        $rootScope.profile = 'admin-home';
      }
      adminService.getProgram().success(function(data) {
        $scope.programs = data;
      })
      $scope.add = function() {
        var details = {
          programName: $scope.programName,
          venue: $scope.venue,
          description: $scope.description,
          date: $scope.date
        };
        adminService.addProgram(details).success(function(data) {
          $scope.errorBlock = data.errorBlock;
          $scope.successBlock = data.successBlock;
          $scope.programName = '';
          $scope.email = '';
          $scope.venue = '';
          $scope.description = '';
          $scope.date = '';
          $scope.newRegister.$setUntouched();
          $scope.newRegister.$setPristine();
        })
      };
    } else {
      $location.path('/login');
    }
  }
]);