const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    course:String

});
module.exports=mongoose.model("table1",studentSchema)//model is used to render table which is made outside