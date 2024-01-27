var express = require('express');
var app = express();
app.set('views engine','ejs');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database:"mydb"
});
con.connect()
app.get('/create',function(req,res){
    res.render("create");
})