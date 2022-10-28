const express=require('express')

const app=express();

let {people}=require('./data')
 
app.get('/api',(req,res)=>{
res.status(200).json({sucess:true,data:people})
})
 app.listen(6066,()=>{
    console.log(`server is running on port 6060`);
 })