const mongoose = require('mongoose')
const Product = require('./productsModels')
const Order = require('./orderModel')

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    cart:{
        type: [String],
        required:true,
        default:[]
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders',
        required: true,
    }]

},{timestamps:true})

const User = mongoose.model('users',userSchema)
module.exports=User