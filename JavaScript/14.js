//prompt
//if < 0 = freezing
//if < 5 = too cold
//if < 15 = cold
//if < 25 = normal
//if < 40 = warm

let temp = +prompt("Enter the number");

if (temp <= 0) 
{
    console.log(typeof t);
    console.log("freexing"); 
    document.write("freezing");
}
else if (temp<=5) 
{
    console.log(typeof t);
    console.log("too cold"); 
    document.write("too cold");   
} else if (temp <= 15)
{
    console.log(typeof t);
    console.log("cold");
    document.write("cold");
}
else if (temp <= 25) 
{
    console.log(typeof t);
    console.log("normal"); 
    document.write("normal");   
} else if (temp<=40)
{
    console.log(typeof t);
    console.log("warm");  
    document.write("warm");  
}
else
{
    console.log(typeof t);
    console.log("too hot");
    document.write("too hot");
}
