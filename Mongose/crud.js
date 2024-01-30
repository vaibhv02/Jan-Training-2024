var express =require('express')
const mongoose=require('mongoose')
const user=require('./user')
//const { applyDefaults } = require('./user')
var app=express();
mongoose.set('strictQuery',true)
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/Mongodb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

app.get('/add',async function(req,res){
    if(req.query.submit){
        var a = req.query.n;
        var b = req.query.c;
        var dt = {"name":a,"course":b};
        var std = new Student(dt);
        var result = await std.save();
        console.log("Data Saved");
        console.log(result);
        return res.redirect("/")
    }
    else{
        res.render("add")
    }
})

app.get('/', async function(req,res){
    let data = await user.find();
    res.render('home',{dt:data})
}).listen(4000)