
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

function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
 }
 test_param(123, "this is a string");


