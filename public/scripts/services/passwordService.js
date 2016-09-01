app.service('passwordService', ['$http',
  function($http) {
    return{
      changePassword: function(data) {
        return $http.post('/user/changePassword', data).success(function(
          data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      forgotPassword: function(data) {
        return $http.post('/user/forgotPassword', data).success(function(
          data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },resetPassword: function(data) {
        return $http.post('/resetPassword/' + data.id, data).success(
          function(data) {
            return data;
          }).error(function(err) {
          return err;
        });
      }
    }
  }
]);
    