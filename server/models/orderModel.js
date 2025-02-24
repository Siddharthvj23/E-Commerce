const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    product: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true})

const Order = mongoose.model('orders',orderSchema)
module.exports=Order