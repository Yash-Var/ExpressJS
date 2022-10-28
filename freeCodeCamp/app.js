const express=require('express');
const readfile=require('fs');
const app=express();

const Port=8080;
const data=readfile.readFileSync('./index.html','utf-8');
// console.log(data);
app.use(express.static('./public'))
app.get('/',(req,res)=>{
res.send(data)
})
app.all('*',(req,res)=>{
    res.send("Page Not Found");
})
app.listen(Port,()=>{
    console.log(`Server is Running on ${Port}`);
})