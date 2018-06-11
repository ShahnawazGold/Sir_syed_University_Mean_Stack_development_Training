
// class Car {

//     public engine :string;
    
  


//     disply(engine :string):void{
//         console.log("start egine  = "+engine);
//     }

// }


// var obj= new Car();
// obj.disply("4545");


//============get set method================

// class MeanStack {
    
//     public name :string;
//     public stdID :number;

//     setID (stdID :number) :void{
//         this.stdID = stdID;
//     }


//     setName (Sname :string) :void {
       
//         this.name =Sname;
//     }

//     ///get method
    
//     getName () : string{
//       return this.name;
//     }

//     getID () :number {
//       return this.stdID;
//     }
    

// }

// var obj = new MeanStack();

// obj.setName("Faisal");
// obj.setID(555);
// obj.getName();

// console.log("studnts name = "+obj.getName());
// console.log("studnts name = "+obj.getID());


class MeanStack {

    public name :string;

     setName (Sname :string) :void {
       
         this.name =Sname;
     }

     getName () : string{
      return this.name;
    }

}

class Kotlin  extends MeanStack{

}

var obj = new Kotlin();
obj.setName("tom");
obj.getName();

console.log(obj.getName());


