const QRCode = require('qrcode')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({
    extended:false
}));

app.set("view engine", "ejs");
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.render( 'index.ejs');
})
app.post('/',function(req,res){
  const stringdata = "Name: " + req.body.name + ", Age: " + req.body.age + ", Department: " + req.body.dept + ", Roll No: " + req.body.rno;
    QRCode.toDataURL(stringdata, function(err,src){
    if(err) return console.log("Error occured")
        if (err) res.send("Error occured");
        res.render("scan", { src });
  })
})


app.listen(3000)
