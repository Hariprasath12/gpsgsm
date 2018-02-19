var express = require('express');
var router = express.Router();
const User = require('../models/data');

/* GET users listing. */
router.get('/data/:id/:lat/:lon', function(req, res) {
 // console.log(req.params.id);

 let id = req.params.id;
 let lan = req.params.lon;
 let lat = req.params.lat;
var data=new User({
	"id_data":id,
	"lon":lan,
	"lat":lat,
	
});
 data.save();
 res.json('hello');


});
router.get('/:id', function(req, res) {
   let id = req.params.id;
   User.id(id, (err, profile) => {
        res.json(profile);
    })
   // res.json('hello');
});

router.get('/alldata', function(req, res) {
 User.list((err,data)=>{
 	res.json(data);
 })
});
module.exports = router;
