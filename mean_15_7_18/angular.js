
 var mainApp = angular.module("mainApp", ['ngRoute']);

 mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    
    when('/class', {
       templateUrl: 'pages/class.html',
       controller: 'classController'
    }).
    
    when('/home2', {
       templateUrl: 'pages/home2.html',
       controller: 'home2Controller'
    }).
    
    otherwise({
       redirectTo: '/class'
    });
 }]);
 
 mainApp.controller('classController', function($scope) {
    //$scope.message = "This page will be used to display add student form";
    console.log("class controller");
 });
 
 mainApp.controller('home2Controller', function($scope) {
    //$scope.message = "This page will be used to display all the students";
    console.log("home2 controller");
 });