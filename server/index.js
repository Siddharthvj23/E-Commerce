const express = require('express')
require('dotenv').config();

const dbConfig = require('./dbCongfig')

const PORT = 8081

const app = express()


app.use(express.json())


app.listen(PORT,()=>{
    console.log("server Running")
})