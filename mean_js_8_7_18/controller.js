


    var mainApp = angular.module("mainApp", []);

    //   App.controller("mainController",function ($scope) {
    //     console.log("shah");


    //     $scope.submit = {
       

    //      };

    //    });

    //    App.controller("navController",function ($scope) {
    //        c
    //    });
    
    mainApp.controller('studentController', function($scope) {
        $scope.student = {
           firstName: "Mahesh",
           lastName: "Parashar",
           fees:500,
           
           subjects:[
              {name:'Physics',marks:70},
              {name:'Chemistry',marks:80},
              {name:'Math',marks:65}
           ],
           
           fullName: function() {
              var studentObject;
              studentObject = $scope.student;
              return studentObject.firstName + " " + studentObject.lastName;
           }
        };
     });