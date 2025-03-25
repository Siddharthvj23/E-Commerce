const mongoose = require('mongoose')

mongoose.connect(process.env.Dburl).then(()=>{
    console.log("Connection Succesfull")
}).catch(()=>{
    console.log('Connection UnSuccesfull')
})