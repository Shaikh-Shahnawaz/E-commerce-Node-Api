const express = require('express')
require("dotenv").config();
const cors = require("cors");
const ecomRoutes = require('./routes/ecomRoutes')
const app = express()

// const PORT = process.env.PORT

// console.log('===>',PORT)

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route middleware
app.use("/api/ecom",ecomRoutes)

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// app.listen(PORT,()=>{
//     console.log(`Server running at http://localhost:${PORT} `)
// })

module.exports = app;