const express = require('express')
const Product = require("../models/productsModels")
const router = express.Router()
router.get('/get-all-products',async(req,res)=>{
    try {
        const allProduct = await Product.find({})
        res.send({
            success: true,
            message: 'All Product fetched Successfully',
            data: allProduct
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})
router.get('/get-product-by-id',async(req,res)=>{
    const productId = req.query.id;
    try {
        const product = await Product.findById(productId)
        res.send({
            success:true,
            message:'product fetched',
            product,
        })
    } catch (error) {
        res.send({
            success:false,
            message:'cannot find product with this id',
        })
    }
})

module.exports = router