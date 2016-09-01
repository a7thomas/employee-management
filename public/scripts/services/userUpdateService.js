app.service('userUpdateService', ['$http',
  function($http) {
    return{
      updateUser: function(data) {
        return $http.post('/user/viewprofile', data).success(function(
          data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      updateAccount: function(data) {
        return $http.post('/user/account', data).success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      updateEducation: function(data) {
        return $http.post('/user/education', data).success(function(data) {
          return data;
        }).error(function(err) {
          return err;
        });
      },
      changeAttribute : function() {
        var element = document.getElementsByClassName("input");
        for (var i = 0; i < element.length; i++) {
          element[i].setAttribute('readonly', 'true');
          element[i].style.background = "#C2D2EA";
        }
        document.getElementById("update").style.display = 'none';
      }
    }
  }    
]);
    