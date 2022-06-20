

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");


app.get("/" , function(req , res ){
    
    let date = new Date();
    
    var options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };

    var day = date.toLocaleDateString("en-us", options);

    res.render("index" , {date : day});
})

app.listen("3000" , function(){
    console.log("server running on port 3000");
})