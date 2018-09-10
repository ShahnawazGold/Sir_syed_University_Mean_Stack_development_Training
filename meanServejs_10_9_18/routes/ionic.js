


var express = require('express');
var router = express.Router();

Ionic = require('../schema/ionic.js');

router.get('/', function(req, res){
   res.send('GET route on ionic.');
});
router.post('/', function(req, res){
   res.send('POST route on post.');
});

//export this router to use in our index.js
module.exports = router;