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





// .controller('mainController',function ($scope,$http) {

//   console.log("wellcome");

//   $scope.submit=function() {

//     console.log("wellcome  yessss");
//     console.log($scope.admission);
//      	   $http.post('/',$scope.admission).success(function(response) {
//         		   console.log(response);
//         		    // $location.path("/");
//         			  //  $window.location.href = '/';
//         			//  alert('Add data in Patient');
//         	   });

//   };
  
// })





.controller('mainController',function ($scope,$http) {
  
  console.log("1st ionic app");

  $scope.submit= function() {

    console.log("here controler send requst Add form");
    console.log($scope.contact);

     	   $http.post('/',$scope.contact).success(function(response) {
        		   console.log(response);
        		    // $location.path("/");
        			  //  $window.location.href = '/';
        			//  alert('Add data in Patient');
        	   });
};
})



