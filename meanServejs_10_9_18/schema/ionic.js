


var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
//    name: String,
//    age: Number,
//    nationality: String

    fname : String ,
    lsname :String,
    fathername :String

});
//var Person = mongoose.model("Person", personSchema);


console.log("Schema ionic");
module.exports.Home = mongoose.model('Person', personSchema);