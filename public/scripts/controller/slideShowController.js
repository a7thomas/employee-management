"use strict"
app.controller('slideShowController', ['$scope', '$cookies', '$rootScope',
  '$timeout',
  function($scope, $cookies, $rootScope, $timeout) {
    var slidesInSlideshow = 4;
    var slidesTimeIntervalInMs = 3000;
    var token = $cookies.get("token");
    if (token === 'user' || token === 'admin') {
      $rootScope.mode = 'logout';
      if (token === 'user') {
        $rootScope.profile = 'user-home';
      } else {
        $rootScope.profile = 'admin-home';
      }
    } else {
      $rootScope.mode = 'login';
    }
    $scope.slideshow = 1;
    var slideTimer = $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);
  }
]);
