const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
productId:{
type:Number,
require:true
},
userId:{
type:String,
require:true,
//unique:true

},

})

const wishlist = mongoose.model("wishlist",wishlistSchema)

module.exports=wishlist