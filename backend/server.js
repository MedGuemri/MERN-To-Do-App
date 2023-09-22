const express = require('express')
const cors=require('cors')
require('dotenv').config()
const app = express()
const connect =require('./dbConnect')
const taskRoutes=require("./routes/taskRoutes")
const port = process.env.PORT

connect()
app.use(cors())
app.use(express.json())

app.use('/api/tasks',taskRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))