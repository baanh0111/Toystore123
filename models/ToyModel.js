var mongoose = require('mongoose');
var MobileSchema = mongoose.Schema({
   model: String,
   price: Number,
   image: String,
   country: String,
   brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'brands'  // 'brands': collection
   }
   
});
//Relationship : mobiles (many) - brands (one)

var ToyModel = mongoose.model('toys', MobileSchema); // 'mobiles' : collection
module.exports = ToyModel;