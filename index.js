const express = require('express')
const mongoose = require('mongoose')
const app=express()
const posts=require('./routes/posts-routes')
const comments=require('./routes/comment-routes')
const register=require('./routes/register-router')
const login=require('./routes/login-router')

mongoose.connect("mongodb://localhost/test")
    .then(()=>console.log('Connected to mongoDb...'))
    .catch((err)=>console.log('Could not connect to mongoDb',err))

app.use(express.json())
app.use('/api/posts',posts)
app.use('/api/comments',comments)
app.use('/api/register',register)
app.use('/api/login',login)



app.listen(2500, ()=>console.log('Listening to port 2500...'))