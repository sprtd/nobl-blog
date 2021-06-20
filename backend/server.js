require('dotenv').config()
const express = require('express')

const connectDB = require('./models/config/db.config')

connectDB()
const app = express()


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))