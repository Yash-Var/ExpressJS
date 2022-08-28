const express =require('express');
const app=express();


app.get("/",(req,res)=>{
    res.write("yash varshney");
    res.send();
});

app.get("/about",(req,res)=>{
res.send("about page yash varshney");
});
app.get("/temp",(req,res)=>{
res.json(
[
    {
    id:0,
    name:"yash varshney",
    },
    {
    id:0,
    name:"yash varshney",
    },
    {
    id:0,
    name:"yash varshney",
    },
    {
    id:0,
    name:"yash varshney",
    },
    {
    id:0,
    name:"yash varshney",
    },
]
);
});

app.listen(7000,()=>{
    console.log("listing the port at 8000");
});
 