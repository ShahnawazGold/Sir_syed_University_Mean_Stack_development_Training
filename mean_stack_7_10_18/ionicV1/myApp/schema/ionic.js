




var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/my_db');\
// var connection = mongoose.createConnection('mongodb://qmz:qmz@ds137729.mlab.com:37729/mean_todoapplication');

var connection = mongoose.createConnection('mongodb://shah:khan2014@ds058579.mlab.com:58579/ionic');
var db = mongoose.connection;

var personSchema = mongoose.Schema({
    
    name : String ,
    lname :String,
    fathername :String

});
// var musicSchema = mongoose.Schema({
    
//     fname : String ,
//     lsname :String,
//     fathername :String

// });
//var Person = mongoose.model("Person", personSchema);

console.log("Schema ionic");
module.exports.Ionic = mongoose.model('Ionic', personSchema);
// module.exports.Ionic = mongoose.model('Muscic', musicSchema);