require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mongoDB = process.env.DATABASE_URL
mongoose.connect(mongoDB)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', ()=>{
    console.log('Database Connected')
})

const app = express()

//To receive and send data in json format in an API
app.use(express.json())

//create endpoints
const routes = require(`./routes/routes`)
app.use('/api', routes)

app.listen(4000, ()=>{
    console.log(`Server started at ${4000}`)
})

