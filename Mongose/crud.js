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

app.get('/', async function(req,res){
    let data = await user.find();
    res.render('home',{dt:data})
}).listen(4000)