var express = require('express');
var app = express();
app.set('view engine','ejs');
app.get("/",function(req,res){
    res.render('home');
})

app.get("/about",function(rea,res)
{
    res.render('about',{name:"vaib"})
})

app.get("/data",function(rea,res)
{
    var ar = [
        {"id":101,"name":"a","course":"bca"},
        {"id":102,"name":"b","course":"mca"},
        {"id":103,"name":"c","course":"bba"},
        {"id":104,"name":"d","course":"mca"},
        {"id":105,"name":"e","course":"bsc"}
    ]
    res.render('data',{data:ar})
})
app.get("/insert",function(rea,res)
{
    res.render('insert')
}).listen(4000)

