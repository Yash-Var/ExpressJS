const express =require('express');
const app=express();
const fs=require('fs');

app.get("/",(req,res)=>{
    res.write("yash varshney");
    res.send();
});

app.get("/about",(req,res)=>{
res.send("about page yash varshney");
});
app.get("/api",(req,res)=>{
    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
    const orgdata = JSON.parse(data);
    res.send(orgdata);
});

app.listen(7000,()=>{
    console.log("listing the port at 8000");
});
 