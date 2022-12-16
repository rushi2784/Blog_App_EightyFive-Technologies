// Import external
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


// file import
const userAuthentication = require("./Middleware/Auth.middleware")
const AuthRouter = require("./Routes/User.routes")
const BlogRoutes = require("./Routes/Blog.routes")


require('dotenv').config()
const app = express();
app.use(express.json());



const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true

}

const url = process.env.MNOGOURL

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('err connection to db ', err)
    })


app.use("/user", AuthRouter)

// login user authentication middleware
app.use(userAuthentication)


app.use("/blog", BlogRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log("db connect")
})