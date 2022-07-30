const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){

  const cityName = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?appid=7597fefeb7d8af2aceaf431c13f9a39d&q="+cityName+"&units=metric";

  https.get(url,function(response){
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.send("The temperature in "+cityName+" is <strong>"+temp+"</strong> degrees Celcius and it is <em>"+desc+"</em>.");
    })
  })
})


app.listen(3000);
