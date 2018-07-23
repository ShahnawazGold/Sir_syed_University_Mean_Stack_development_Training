


var mainApp = angular.module ("mainApp", ['ngRoute']);

 mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/', {
               templateUrl: 'pages/class.html',
               controller: 'classController'
            }).
            
            when('/home2', {
               templateUrl: 'pages/home2.html',
               controller: 'home2Controller'
            }).
            when('/about', {
              templateUrl: 'pages/about.html',
              controller: 'aboutController'
           }).
        
            otherwise({
               redirectTo: '/'
            });
         }]);
mainApp.controller('mainController',function ($scope) {
  console.log("yes mainController");
});

mainApp.controller('aboutController',function ($scope) {
  console.log("yes aboutController");
});
 
/// factory squre
  
mainApp.factory('MathService', function() {
  var factory = {};
  
  factory.multiply = function(a, b) {
     return a * b;
  }
  return factory;
});

mainApp.service('CalcService', function(MathService){
  
  this.square = function(a) {

     return MathService.multiply(a,a);
  }
});

 mainApp.controller('classController', function($scope,CalcService) {
    //$scope.message = "This page will be used to display add student form";
    console.log("class controller");

    $scope.square = function() {
      $scope.result = CalcService.square($scope.number);
   }
 });
 
 mainApp.controller('home2Controller', function($scope) {
    //$scope.message = "This page will be used to display all the students";
    console.log("home2 controller");
 });