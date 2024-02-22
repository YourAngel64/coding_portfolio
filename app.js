const express = require("express");
// const fs = require("fs");

const app = express();
const port = 3030;
// const options = {
//     key: fs.readFileSync("/workspaces/enten_home.github.io/ssl/enten.run.place.key"),
//     cert: fs.readFileSync("/workspaces/enten_home.github.io/ssl/enten.run.place.cer"),
// }


app.set('view engine', "ejs");
app.use('/public', express.static('public'));


app.get("/", (req, res) =>{
    res.render("/workspaces/coding_portfolio/Index/index.ejs");
})



app.listen(port);