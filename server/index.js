
const express = require('express')
const app = express()
const { PORT, mongoUri } = require('./node_modules/config')
const cors = require('cors')
const bodyParser = require('body-parser')
const TodoListRoutes = require('./routes/api/Todolist')
const path = require('path')
const { default: mongoose } = require('mongoose')
require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,        
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World Tugas Web')
})

app.use('/api/todoList', TodoListRoutes)

app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`)
})