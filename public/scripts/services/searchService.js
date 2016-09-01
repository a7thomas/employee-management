app.service('searchService', ['$http',
  function($http) {
    return{
      searchUser: function(id) {
        return $http.get('/user/search/' + id).success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      search: function(data) {
        return $http.post('/user/search', data).success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      }
    }
  }
]);