const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  var result= Number(num1)+Number(num2);

  res.send("The result of calculation is "+result);
})

app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/bmi.html");
});

app.post("/bmi",function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var bmi = weight/(height*height);
  res.send("Your BMI is "+bmi);

})
app.listen(3000);
