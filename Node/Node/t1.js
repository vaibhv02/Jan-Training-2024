var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "mydb"
});

con.connect()
con.query("insert into t1(name,course) values('Harsh','BCA')",function(err,result){
    
    if(!err) {
        con.query("select * from t1",function(err,result){
            if(!err){
                result.forEach(row=>{
                    console.log(row);
                })
            }
            else
            console.log("err"+err);
        })
                
    }
    else
    console.log(("err"+err));
        
})