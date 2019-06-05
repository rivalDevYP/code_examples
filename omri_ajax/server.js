const myPort = process.env.PORT || 5000;
const expressModule = require("express");
const app = expressModule();
const path = require("path");

app.listen(myPort, onHttpStart);

function onHttpStart() {
    console.log("listening on port "+myPort);
}

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"));
});

app.get("/request",(req,res)=>{
    res.send("hello, world");
});
