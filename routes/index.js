var express = require('express');
var router = express.Router();
var MobileModel = require('../models/ToyModel');

/* GET home page. */

router.get('/', async (req, res) => {
  var mobiles = await MobileModel.find({}).populate('brand');
  //Path: views/mobile/index.hbs
  res.render('layout', { mobiles, layout:'layout'});
})

module.exports = router;
