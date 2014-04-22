

var app = angular.module('myapplication',["simplePagination","ngAnimate"])
// .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'index.html',
//         controller: 'maincontroller'
//       }).when('/test', {
//         templateUrl: 'test.html',
//         controller: 'maincontroller'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });


app.directive('country',function($scope,attrs){


return{

	restrict:'A',

	template:'<img src="images/attrs.png">'
}


})