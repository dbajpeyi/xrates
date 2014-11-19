var app = angular.module('xrates')
app.controller("HomeCtrl", [
    "$scope",
    "$location",
    "$http",
  function (
    $scope,
    $location,
    $http
  ) {

      $scope.convert = function(){
        $http.get("/get-conv")
          .success(function(data, status, headers){
            console.log(data);
          })
          .error(function(data, status, headers){
            console.log(data);
          })

      }

  }])
