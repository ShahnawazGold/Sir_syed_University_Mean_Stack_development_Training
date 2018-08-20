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

.controller('mainController', function($scope,$cordovaInAppBrowser,$cordovaGeolocation) {
  console.log("main controller");

    
   var options = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'no'
 };

 $scope.openBrowser = function() {
    $cordovaInAppBrowser.open('http://google.com', '_blank', options)
  
    .then(function(event) {
       // success
    })
  
    .catch(function(event) {
       // error
    });
 }



      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
      .getCurrentPosition(posOptions)

      .then(function (position) {
          var lat  = position.coords.latitude
          var long = position.coords.longitude
          console.log(lat + '   ' + long)
      }, function(err) {
          console.log(err)
      });

      var watchOptions = {timeout : 3000, enableHighAccuracy: false};
      var watch = $cordovaGeolocation.watchPosition(watchOptions);

      watch.then(
          null,
        
          function(err) {
            console.log(err)
          },
        
          function(position) {
            var lat  = position.coords.latitude
            var long = position.coords.longitude
            console.log(lat + '' + long)
          }
      );

      watch.clearWatch();
 
 
})