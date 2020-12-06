/**
 * TODO NodeJS server: xem lại bài viết về nodejs server để hiểu hơn.
 */
const express = require('express')
var app = express();
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./views");
const port = process.env.PORT || 3000;
app.listen(port);
app.get('/',(req,res)=>{
    res.render("home");
})