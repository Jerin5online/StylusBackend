require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./DATABASE/connection')

//import routes

const rout = require('./ROUTES/router')

const stylusServer = express()

stylusServer.use(cors())

stylusServer.use(express.json())  //this is middlewares - use it cntrl req res cycle

stylusServer.use(rout)

const PORT = 3015 || process.env.PORT

stylusServer.listen(PORT,()=>{
  console.log(`SERVER RUNNING AYIII GUYZZ`);
})

stylusServer.get('/',(req,res)=>{
res.send(`<h1>hello</h1>`)
})
