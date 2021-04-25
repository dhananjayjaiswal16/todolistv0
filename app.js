//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

var items = ["Wash clothes", "Chill with my Boys", "Netflix"];
let workItems = [];

app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

let day = date();

  res.render("list", {

    listTitle: day,
    newListItems: items

  });
});


app.get("/work",function(req, res){
  res.render("list", {
    listTitle: "Work",
    newListItems: workItems
  });
});

// app.get("/about", function(req, res){
//   res.render("about");
// });


app.post("/", function(req ,res){

  let item = req.body.newItem;
  console.log(req.body);

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");

  } else {
    items.push(item);
    res.redirect("/");
  }

});



app.listen(3000, function() {
  console.log("Server started on 3000");
});