const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public")); 
var data =[];


app.get("/",function(req,res){
 var today = new Date();
 
 var options = {
     weekday: "long",
     month: "long", 
     day: "numeric"
 }
 var todays = today.toLocaleDateString("en-US",options);
 res.render("list",{ kind: todays,item: data});
})
app.post("/",function(req,res){
 var item = req.body.task;
 data.push(item);

res.redirect("/")

})
app.listen(3000,function(){
    console.log("server started at port number 3000");
})