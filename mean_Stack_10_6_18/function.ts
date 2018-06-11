
//==============Calling a Function=========


function test() { 
    console.log("function called"); 
 } 
 test();    // function invocation


 //=====================Returning a Function===================


function disply():any {
    return "home js";
}

function show() {
    var msg =disply();
    console.log(msg);
}

show();

//==========================Parameterized a Function=========

// function displys(n1 :string, n2 :number) {

// console.log(n1);
// console.log(n2);
// }

// displys("faisal",566);

// function calculate_discount(price :any, rate :any =5) {

//     if (rate === 0) {
//      rate = 0.50; 
//     }
 
//     var discount = price * rate;
//     console.log("Discount Amount: ", discount);
//  }
//  calculate_discount(1000);
//  calculate_discount(1000, 0.30);
//==============Anonymous Function===========



var msg = function() :string { 
    return "hello world";  
 } 
 console.log(msg());

 var  msgs= function () :string{
     return "xyz";
 }
 console.log(msgs());


 //================Anonymous function with parameters========

 var res = function (a :number, b :number) {
    return a * b;
 };
 console.log(res(12, 2));


 ///===================

 (function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()  ;

 ///================
//  var foo = (x:number)=>10 + x 
// console.log(foo(100))      //outputs 110 

///===============

var foos = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 foos(100)

 //==============







