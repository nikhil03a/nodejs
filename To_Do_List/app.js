const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const date = require(__dirname+"/date.js");
var items = ['Fish','Mutton'];
var workitems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get('/', function(req,res){
  let day = date.getDate();
  res.render('list',{listTitle:day, newItem: items});
})
app.post('/',function(req, res){
  var item = req.body.item;
  if(req.body.button == "Work"){
    workitems.push(item);
    res.redirect('/work');
  }else{
  items.push(item);
  res.redirect('/');
  }
})
app.get("/work",function(req,res){
  res.render('list',{listTitle:"Work", newItem: workitems})
})
app.listen(3000);
