const express = require('express')
const app = express()
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose')

async function connetToDb() {
    await mongoose.connect(process.env.Dburl).then(()=>{
    console.log("Connection Succesfull")
}).catch(()=>{
    console.log('Connection UnSuccesfull')
})
    
}
connetToDb()
const PORT = 8081



const userRoutes = require('./Routes/userRoutes');
const ProductRoutes = require('./Routes/productRoutes');

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/product',ProductRoutes)

app.listen(PORT, () => {
    console.log("server Running")
})

