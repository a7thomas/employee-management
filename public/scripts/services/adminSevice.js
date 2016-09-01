app.service('adminService', ['$http',
  function($http) {
    return {
      addMember: function(details) {
        return $http.post('/admin/registration', details).success(
          function(data) {
            return data;
          }).error(function(err) {
          return err;
        });
      },
      addProgram: function(details) {
        return $http.post('/admin/program', details).success(function(
          data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      list: function() {
        return $http.post('/admin/list').success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      deleteUser: function(id) {
        return $http.get('/admin/list/' + id).success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      getProgram: function(data) {
        return $http.get('/user/program').success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      }
    }
  }
]);