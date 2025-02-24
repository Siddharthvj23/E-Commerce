const mongoose = require('mongoose')
const Product = require('./productsModels')

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
    // cart:{
    //     type: [Product],
    //     required:true,
    //     default:[]
    // },
    // orders:{
    //     type:[Product],
    //     required:true,
    //     default:[]
    // },

},{timestamps:true})

const User = mongoose.model('users',userSchema)
module.exports=User