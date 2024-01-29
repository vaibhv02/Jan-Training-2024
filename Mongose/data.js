var express=require ('express')
const mongoose=require('mongoose')
var app=express();
const user=require('./user')
mongoose.set('strictQuery',true)
mongoose.connect("mongodb://localhost:27017/Mongodb",
{
    useNewUrlParser:true,//allow data to be encrypt hokr jaye server pr
    useUnifiedTopology:true //it is used to travel data on server
})

async function insertData()
{
    var dt={"name":"divisha","course":"bsc"}
    var b=new user(dt);
    var result=await b.save()
    console.log(result);

}
async function getData()
{
    var dt=await user.find();
    dt.forEach(row=>{
        console.log(row._id+"\t"+row.name+"\t"+row.course);
    })
}
 insertData()
// getData()
async function deldata(id)
{
    var dt= await user.deleteOne({_id:id})
}
// deldata("65b62a668c540509dfd7ea3c")