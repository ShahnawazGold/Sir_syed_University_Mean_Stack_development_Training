// // interface IPerson { 
var info = /** @class */ (function () {
    function info() {
    }
    info.prototype.setInfo = function () {
        this.iinfo = {
            name: "Abdullah",
            fatherName: "Shahid"
        };
    };
    info.prototype.getInfo = function () {
        return this.iinfo;
    };
    return info;
}());
var infoObj = new info();
infoObj.setInfo();
var infoVar = infoObj.getInfo();
console.log("Name: " + infoVar.name);
console.log("Father name: " + infoVar.fatherName);
