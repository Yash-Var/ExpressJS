 const express=require('express')
const logger=require('./logger')
const auth=require('./authorised')
const morgan = require('morgan')

 const app=express();

 // req => middleware => res  

 app.use(morgan('tiny'));


 app.get('/',(req,res)=>{
    res.send("home page");
 })
 
 app.get('/about',(req,res)=>{
    res.send("about page");
 })
 app.get('/api/product',(req,res)=>{
    res.send(" page");
 })
 app.get('/api/v1',(req,res)=>{
   console.log(req.user);
    res.send("api page");
 })


 app.listen(6060,()=>{
    console.log(`server is running on port 6060`);
 })