const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const cookieparser = require('cookie-parser')

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auths')
const tweetRoutes = require('./routes/tweets')

const app = express()
const connectDB = require('./db/connect')
connectDB()

app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);



const port = process.env.PORT || 3000;
app.listen(port,console.log(`server is running on port ${port}`))