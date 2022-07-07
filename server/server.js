// importing our express application
const app = require("./app");

//import mongoose inorder to connect to our database
const mongoose = require("mongoose");

//import dotenv inorder to connect to our database
const dotenv = require("dotenv")

//use dotenv to connect to our config file
dotenv.config({
    path: "./config.env"
})

//connecting to database 

const Watchers = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD))
.then(() => {
    console.log("Database is running!")
})
.catch((error) => {
    console.log(error.message)
})

const port = process.env.PORT
app.listen( port , () => {
    console.log(`Server is running on PORT ${port}`)
})
