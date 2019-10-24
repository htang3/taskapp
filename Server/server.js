const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();


const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
//connecting database

mongoose.connect("mongodb+srv://htang3:Bunsocola2607@cluster0-urdp8.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, dbName:"awstorage"})
const conn = mongoose.connection;
conn.once('open', ()=>{
    console.log('database running');
})

app.use('/task', require('./routes/task'))


app.listen(port, 
   ()=>{
    console.log("App listening "+ port)
   });