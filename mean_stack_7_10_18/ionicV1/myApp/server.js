






var express = require('express');

//var mongoose = require('mongoose');

var bodyParser = require('body-parser')

var path = require('path');



 var app= express();
 app.use(express.static(path.join(__dirname, 'www')));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


 var ionic = require('./routes/ionic.js'); 
 app.use('/ionic', ionic);

app.get('*',(req,res)=> {
 
 res.sendFile(path.join(__dirname,'www/index.html'));


});

app.listen(8000);
console.log("server running on port 8000");
