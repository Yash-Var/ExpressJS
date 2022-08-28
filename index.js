// Express Js is a Node js Framework. It is the most popular framework as of now 

// ExpressJs is a web application framework that provides you with a simple API to build websites, web apps and back ends.

const express=require('express');
const app=express();
const port=3000;

const path=require('path');
const temp=path.join(__dirname,"../templates");



app.set('view engine',"hbs");
app.set('views',path.join(__dirname,"../templates"));
app.use(express.static(path.join(__dirname,"/public")));

app.get("",(req,res)=>{
    res.render('index',{
        cname:"Yash"
    });
});
app.get("/about",(req,res)=>{
res.send("yash varshney");
});
app.get("/",(req,res)=>{
    res.send("yash varshney");
});

app.listen(port,()=>{
console.log(`listening to the the ${port}`);
});