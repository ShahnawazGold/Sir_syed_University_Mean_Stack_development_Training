
//  var a :string = "wellcome";
//  console.log(a);


//  var b: boolean = false;

//  var c :number =4;
//  var d : number[] =[3,6];


//  //======any

//  let notSure: any = 4;

// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean

// var g : any ;

// g = "shah";

// var nums = 2;  

//   // data type inferred as  number 

// console.log("value of num "+nums); 

// // nums = "12";
// // console.log(nums);


// var global_num = 12

//           //global variable 

// class Numbers { 

//    num_val = 13; 
//                //class variable 
//    static sval = 10;         //static field 
   
//    storeNum():void { 
//       var local_num = 14;    //local variable 
//    } 
// } 
// console.log("Global num: "+global_num)  
// console.log(Numbers.sval)   //static variable

// var obj = new Numbers(); 

// console.log("Global num: "+obj.num_val)


//===================Arithmetic operators=========


// var num1 : number = 2;
// var num2 : number =4;

// var res :number = 0;

// //res = a+b;

// res = num1 - num2; 
// console.log("Difference: "+res) 

// res = num1*num2 
// console.log("Product:    "+res) 

// res = num1/num2 
// console.log("Quotient:   "+res)
 
// res = num1%num2 
// console.log("Remainder:   "+res) 

// num1++ 
// console.log("Value of num1 after increment "+num1) 

// num2-- 
// console.log("Value of num2 after decrement "+num2)

// console.log(res)

//====================Relational Operators==========//
// var num1 : number =2;
// var num2 : number =4;

// var res = num2 == num1;
// console.log(res);

// res = num2 !=num1;
// console.log(res);

// res = num2 > num1;

// console.log(res);
//===============Logical Operators==========

// var avg:number = 20; 
// var percentage:number = 90; 

// console.log("Value of avg: "+avg+" ,value of percentage: "+percentage);
 
// var res:boolean = ((avg>50) && (percentage>80)); 
// console.log("(avg>50)&&(percentage>80): ",res);

// var res:boolean = ((avg>50)||(percentage>80)); 
// console.log("(avg>50)||(percentage>80): ",res);

// var res:boolean=!((avg>50)&&(percentage>80)); 
// console.log("!((avg>50)&&(percentage>80)): ",res);

//===============loop=======

for (var index = 0; index <= 10; index++) {
  console.log(index);
    
}

for (var i=0; i<=10; i++){
    console.log("for loop"+index);
}
// for in

var arry : number[] =[2,5];
for(var a in arry){
 console.log(a);
}


var j:any; 

var n:any = "a b c" 

for(j in n) {
   console.log(n[j])  
}


var num : number =0;

while(num <=10) { 
   
   num++; 
   console.log(num);
} 

var p = 10;
do {
   console.log("do while  "+p);
 p--;
} while (p <2);
























