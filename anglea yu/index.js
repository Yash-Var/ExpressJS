const express=require('express');
// const res = require('express/lib/response');
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
res.sendFile(__dirname +"/bmiclaculator.html");
});
app.get("/about",(req,res)=>{
res.send("this is the about page");
});
app.post("/",(req,res)=>{
    let w=parseFloat(req.body.w);
    let h=parseFloat(req.body.h);
    let bmi=w/(h*h);
    res.send(`The BMI is ${bmi}`);
})
app.listen(3000,()=>{
console.log("server is active");
});