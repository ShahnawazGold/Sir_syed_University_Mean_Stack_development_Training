



var express = require('express');
var router = express.Router();

Ionic = require('../schema/ionic.js');


router.get('/', function(req, res){
   res.send('GET route on ionic.');
   console.log("shah yes");

});
router.post('/', function(req, res){
   res.send('POST route on post.');

   console.log(req.body);
//    Ionic.create(req.body, function (err, responce) {
//      //if (err) return console.log(err);
//       res.json(responce);
//       console.log("shah ");
//    });
});

//export this router to use in our index.js
module.exports = router;