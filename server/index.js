const express = require('express')
require('dotenv').config();

const dbConfig = require('./dbCongfig')

const PORT = 8081

const app = express()

const userRoutes = require('./Routes/userRoutes');
const ProductRoutes = require('./Routes/productRoutes');

app.use(express.json())

app.use('/user', userRoutes)
app.use('/product',ProductRoutes)

app.listen(PORT, () => {
    console.log("server Running")
})

