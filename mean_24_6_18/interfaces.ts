

// // interface IPerson { 

// //     firstName:string, 
// //     lastName:string, 
// //     sayHi: ()=>string 
// //  } 


// //  var customer: IPerson = { 

// //     firstName:"Tom",
// //     lastName:"Hanks", 
// //     sayHi: ():string =>{return "Hi there"} 
// //  } 
 
// //  console.log("Customer Object ") 
// //  console.log(customer.firstName) 
// //  console.log(customer.lastName) 
// //  console.log(customer.sayHi()) 
 
 
// //  var employee:IPerson = { 
// //     firstName:"faisal",
// //     lastName:"khan", 
// //     sayHi: ():string =>{return "Hello!!!"} 
// //  } 
   
// //  console.log("Employee  Object ") 
// //  console.log(employee.firstName) 
// //  console.log(employee.lastName)

// //=====================UNION ====================

// interface RunOptions { 
//     program:string; 
//     commandline:string[] | string| (()=>string); 
//  } 
 
//  //commandline as string 
//  var options:RunOptions = {
 
//  program:"test1",
//  commandline:"Hello"
 
//  }; 
//  console.log(options.commandline)  
 
//  //commandline as a string array 
//  var optionss :RunOptions = {
//  program:"test1",
//  commandline:["Hello","World"]
//  }; 
//  console.log(optionss.commandline[0]); 
//  console.log(optionss.commandline[1]);  
 
// //  //commandline as a function expression 
//  var options1 :RunOptions= {
//  program:"test1",
//  commandline:()=>{
//  return "**Hello World**";
//  }
//  }; 
 
//  var fn:any = options1.commandline; 
//  console.log(fn());

//==================================Interfaces and Inheritance============


// interface Person { 
//     age:number 
//  } 
 
//  interface Musician extends Person { 
//     instrument:string 
//  } 
//  var drummer = <Musician>{} ; 
//  drummer.age = 27 
//  drummer.instrument = "Drums"
//  console.log("Age:  "+drummer.age);
//   console.log("Instrument:  "+drummer.)

interface Iinfo{
name: string;
fatherName: string;
}

class ff implements Iinfo
{
    
} 
class info {
    iinfo: Iinfo;

    setInfo()
    {
        this.iinfo = {
            name: "Abdullah",
            fatherName: "Shahid"
        };
    }

    getInfo()
    {
        return this.iinfo;
    }
}

var infoObj = new info();
infoObj.setInfo();

var infoVar = infoObj.getInfo();

console.log("Name: " + infoVar.name);
console.log("Father name: " + infoVar.fatherName);
