const express=require('express');
const app=express()
// app.use("/",(req,res)=>{
// res.send('welcome to our server')})
app.use("/about",(req,res)=>{
    res.send('welcome to our server')
    
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})


