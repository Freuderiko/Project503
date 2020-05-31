const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

//Conexão com o MongoDB.
mongoose.connect(
  'mongodb+srv://project503:project503@project503-nj1eq.mongodb.net/project503?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}
)

app.use(express.json())
app.use(routes)


app.listen(3333)