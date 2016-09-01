"use strict"
app.controller('ngConfirmController',['$scope','$modalInstance','message',function($scope, $modalInstance, message) {
  $scope.message = message;
  $scope.yes = function() {
    $modalInstance.close();
  };
  $scope.no = function() {
    $modalInstance.dismiss();
  };
}]);