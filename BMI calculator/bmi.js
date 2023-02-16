const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height + height);

    res.send(String("Your BMI is : " + bmi));
   


});
app.listen(4000,function(){
    console.log("server is running on port ")
});