const express =require('express');
const port=process.env.PORT || 5000;

const app=express();

app.use(express.json());
app.use(express.urlencoded());
// app.use(express.static('public/yash'));
app.get('/',(req,res)=>{
res.send("stared");
});
app.get('/form',(req,res)=>{
   res.sendFile(__dirname + '/public/yash/index.html');
});

app.post('/form',(req,res)=>{
console.log(req.body);
res.send("yash varshney");
});

app.listen(port,()=>{
    console.log("server is started");
});