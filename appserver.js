const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 443;
const options = {
    key: fs.readFileSync("/workspaces/enten_home.github.io/ssl/enten.run.place.key"),
    cert: fs.readFileSync("/workspaces/enten_home.github.io/ssl/enten.run.place.cer"),
}



app.set('view engine', "ejs");
app.use('/public', express.static('public'));



app.get("/", (req, res) =>{
    res.render("/home/ubuntu/enten_home.github.io/Index/index.ejs");
});


app.get("/main", (req, res) =>{
    res.render("/home/ubuntu/enten_home.github.io/Main/home.ejs");
})

app.get("/menu", (req, res) =>{
    res.render("/home/ubuntu/enten_home.github.io/Menu/menu.ejs");
})

var server = https.createServer(options, app).listen(port);
