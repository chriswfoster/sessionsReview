const express = require ('express')
const cors = require('cors')
const {json} = require('body-parser')
const session = require("express-session")

const controller = require(`${__dirname}/controller/controller`)

const port = 3033;


const app = express()
app.use(cors())
app.use(json())

app.use(
    session({
      secret: "this is my super secret",
      resave: false,
      saveUninitialized: false
    })
  )

app.get("/api/login", controller.logUserIn)
app.put("/api/setage", controller.ageAdder)
app.put("/api/logout", controller.logout)

app.listen(port, ()=> {
    console.log(`Shhh, I'm trying to listen to port ${port}`)
})