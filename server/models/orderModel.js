const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    products: {
        type : [String],
    },
    totalPrice:{
        type:Number,
        required:true
    },
    ShippingAddress:{
        type: String,
        required:true
    },
    paymentStatus:{
        type:String,
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    }
},{timestamps:true})

const Order = mongoose.model('orders',orderSchema)
module.exports=Order