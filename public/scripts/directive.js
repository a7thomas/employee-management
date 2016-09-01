angular.module("employeeApp").directive("sidebar", function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/sidebar.html',
    scope: true,
    transclude: false,
    controller: 'userController'
  };
});

angular.module("employeeApp").directive("header", function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/header.html',
    scope: true,
    transclude: false,
    controller: ''
  };
});

angular.module("employeeApp").directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/footer.html',
    scope: true,
    transclude: false,
    controller: ''
  };
});

angular.module('employeeApp').directive('fileModel', ['$parse',
  function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        element.bind('change', function() {
          scope.$apply(function() {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }
]);

app.directive('ngConfirm',['$modal','$parse', function($modal, $parse) {
  return {
    priority: -1,
    link: function(scope, element, attrs) {
      element.on('click', function(e) {
        e.stopImmediatePropagation();
        $modal.open({
          templateUrl: 'ng-confirm-template',
          controller: 'ngConfirmController',
          resolve: {
            message: function() {
              return attrs.ngConfirm;
            }
          }
        }).result.then(function() {
          $parse(attrs.ngClick)(scope, {$event: e});
        });
      });
    }
  };
}]);