angular.module('xrates', [
  'ngRoute',
  "ngCookies",
]);

angular.module('xrates').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider
    .when('/home',
      {templateUrl: 'views/home.tpl.html', controller : "HomeCtrl"})
    .otherwise(
      {templateUrl: "views/home.tpl.html"})
}])
.run( function run($http, $cookies){
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
})
