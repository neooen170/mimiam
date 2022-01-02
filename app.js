// Imports
const express  = require('express');
const app      = express()
const cors     = require('cors');
const mongoose = require('mongoose')

// Setting up environment variable
require('dotenv').config()

// Connect to DB
// mongoose.connect(process.env.MDB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => console.log('🔌 Connected to DB'))
// .catch(err => console.log(`😡 The DB is not connected : ${err}`))

//==================================
// 💾 Routes import
//==================================

//==================================
// 🛣️ Routes
//==================================

// Middlewares
app.use(express.json())

module.exports = app