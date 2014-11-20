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
            $scope.inr = data.rates["INR"]
          })
          .error(function(data, status, headers){
          })

      }

      $scope.clear = function() {
        $scope.inr = "";
      }

  }])
