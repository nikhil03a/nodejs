const express = require("express");
const app = express();

app.get("/",function(req,res){
  res.send("<h2>Hello World!</h2>");
});

app.get("/contact",function(req,res){
  res.send("<h2>Contact me At:</h2><p>anikhil03prasanna@gmail.com</p>");
});


app.get("/about",function(req,res){
  res.send("<h2>I'm Nikhil Prasanna, Web Developer and a student</h2>");
});


app.listen(3000,function(){
  console.log("Server Started on port 3000");
});
