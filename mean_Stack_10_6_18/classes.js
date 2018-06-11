// class Car {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MeanStack = /** @class */ (function () {
    function MeanStack() {
    }
    MeanStack.prototype.setName = function (Sname) {
        this.name = Sname;
    };
    MeanStack.prototype.getName = function () {
        return this.name;
    };
    return MeanStack;
}());
var Kotlin = /** @class */ (function (_super) {
    __extends(Kotlin, _super);
    function Kotlin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kotlin;
}(MeanStack));
var obj = new Kotlin();
obj.setName("tom");
obj.getName();
console.log(obj.getName());
