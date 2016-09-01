app.service('loginService', ['$http',
  function($http) {
    return {
      loginUser: function(cred) {
        return $http.post('/user', cred).success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      }
    }
  }
]);
