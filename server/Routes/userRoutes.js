const express = require('express')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require("jsonwebtoken")
const authMiddleware = require('../middleware/authMiddleware')
const Order = require('../models/orderModel')


router.post('/register',async(req,res)=>{
    try {
        if (!req.body || !req.body?.email || !req.body?.password || !req.body?.name) {
            res.send({
                message: "invalid params"
            })
            return;
        }
        const userExists = await User.findOne({email:req.body.email})

        if(userExists){
            res.send({
                success:false,
                message:"user already Exists"
            })
        }

        const salt = await bcrypt.genSalt(10)

        const hashpwd = bcrypt.hashSync(req.body.password,salt)
        req.body.password= hashpwd

        const newUser = await User(req.body)
        await newUser.save()

        res.send({
            success:true,
            message:"You've successfully signedup, Please Login",
            newUser
        })

    } catch (error) {
        console.log(error)
        
    }
}) 

router.post('/login',async(req,res)=>{
    try {

        if (!req.body || !req.body?.email || !req.body?.password) {
            res.send({
                message: "invalid params"
            })
            return;
        }
        const user = await User.findOne({email: req.body.email})

        if(!user){
            res.send({
                success:false,
                message: "user does not exist Please Register"
            });
        }
        

        const validPassword = await bcrypt.compare(req.body.password,user.password)
        if (!validPassword){
            res.send({
                success:false,
                message:"Sorry,invalid password entered!"
            })
        }

        const token = jwt.sign({userId:user._id},process.env.secret_key_jwt, {expiresIn:'1d'})
        res.send({
            success:true,
            message:"You've successfully logged in!",
            token:token,
            user
        })
    } catch (error) {
        console.log(error)
        
    }
})
router.post('/add-to-cart',authMiddleware,async(req,res)=>{
    try {
        const productId = req.body.productId
        const userId = req.body.userId
        await User.findByIdAndUpdate(userId,{ $push: { cart: productId } })

        res.send({
            success:true,
            message:"Product add successfully "
        })
    } catch (error) {
        console.log(error)
    }
})

router.post('/create-order',authMiddleware,async(req,res)=>{
    try {
        const userId = req.body.userId
        const newOrder = await Order({...req.body.orderInfo, orderStatus: "pending", paymentStatus: "pending"});
        await newOrder.save()
        await User.findByIdAndUpdate(userId,{ $push: { orders: newOrder } })

        res.send({
            success:true,
            message:"Order Placed successfully "
        })
    } catch (error) {
        console.log(error)
        res.send({
            success:false,
            error,
        })
    }
})


router.get('/get-current-user',authMiddleware, async(req,res)=>{
    const user = await User.findById(req.body.userId).select("-password");

    res.send({
        success: true,
        message: 'you are authorized',
        data: user
    })
});

module.exports = router