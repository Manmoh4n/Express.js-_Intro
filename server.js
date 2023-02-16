const { response } = require("express");
const express = require("express");

const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello<h1>")
});

app.get("/contact" , function(req,res){
    res.send("Contact me at : manmohankumar945@gmail.com")
});

app.get("/about" , function(req,res){
    res.send("Hey , I am Manmohan  and I love Coding.")

})

app.listen(3000,function(){
    console.log("server started on port 3000");

});