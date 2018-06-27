

// // var mytuple = [10,"Hello","World","typeScript"]; 

// // console.log("Items before push "+mytuple.length)    // returns the tuple size 

// // mytuple.push(12)                                    // append value to the tuple 

// // console.log("Items after push "+mytuple.length) 

// // console.log("Items before pop "+mytuple.length) 

// // console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
// // console.log("Items after pop "+mytuple.length)

// var mytuple = [10,"Hello","World","typeScript"]; //create a  tuple 

// console.log("Tuple value at index 0 "+mytuple[0]) 

// //update a tuple element 
// mytuple[0] = 121     
// console.log("Tuple value at index 0 changed to   "+mytuple[0])

// // output:
// // Tuple value at index 0 10 
// // Tuple value at index 0 changed to 121


// //=============union ============================

// // var val:string|number|null 

// // val = 12 

// // console.log("numeric value of val "+val) 
// // val = "This is a string" 
// // console.log("string value of val "+val)


// function disp(name) {

//     if (typeof name == "string") {
 
//        console.log(name);
 
//     } else {
 
//        var i;
//        for (i = 0; i < name.length; i++) {
//           console.log(name[i]);
//        }
 
//     }
//  }

//  disp("mark");
// console.log("Printing names array....");
// disp(["Mark", "Tom", "Mary", "John"]);



var arr ;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
arr = ["khi", "lh", "isb"];
console.log("**string array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}