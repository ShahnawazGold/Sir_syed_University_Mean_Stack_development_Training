// Ionic Starter App


angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
 
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) { 
      StatusBar.styleDefault();
    }
  });
})

.controller('mainController', function($scope,$cordovaInAppBrowser) {
  console.log("main controller");

  var options = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'no'
 };

 $scope.openBrowser = function() {
  console.log("app controller");

    $cordovaInAppBrowser.open('http://google.com', '_blank', options)
  
    .then(function(event) {
       // success
    })
  
    .catch(function(event) {
       // error
       
    });
 }
  
 
 
})