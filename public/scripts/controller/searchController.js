"use strict"
app.controller('searchController', ['$location','$scope', 'searchService', '$rootScope', '$cookies',
  function($location,$scope, searchService, $rootScope, $cookies) {
    $rootScope.mode = "logout";
    $scope.search = function() {
      var d = {
        search: $scope.find
      };
      if ($cookies.get("token") === 'admin' || $cookies.get("token") === 'user') {
        if ($scope.find != null) {
          searchService.search(d).success(function(data) {
            $rootScope.users = "";
            if (data.length !== 0) {
              $rootScope.users = data;
              $rootScope.err = "";
              $location.path('/search');
              $scope.find = '';
            } else {
              var modal = document.getElementById('alert1');
              modal.style.display = "block";
            }
          })
        }
      }
    }
  }
]);

app.controller('searchedController', ['$scope', 'searchService', '$rootScope',
  '$routeParams', '$cookies',
  function($scope, searchService, $rootScope, $routeParams, $cookies) {
    var id = $routeParams.id;
    var token = $cookies.get("token");
    if (token === 'user') {
      $rootScope.profile = 'user-home';
    } else {
      $rootScope.profile = 'admin-home';
    }
    searchService.searchUser(id).success(function(data) {
      $scope.details = data;
      $scope.dob = new Date(data.personalInfo.dob);
    });
  }
]);