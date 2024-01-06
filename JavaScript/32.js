//Functions


function sum1(a,b) 
{
    return a+b;
    
}
console.log(sum1(3,4));

//=========================================

function sum2(a,b,c=10) 
{
    return a+b+c;
    
}
console.log(sum2(3,4));

//=========================================

function sum3(a,b,...numbers) 
{
    console.log(a,b,numers,"message");
    
}
console.log("muskan");

//=========================================

//Objects Above

function computation() 
{
    let x = 6
    function area(a,b)
    {
        return a*b
    }    
    return area
    
}
console.log(computation()(4,3));


//==========================================

function computation() 
{
    let x = 5
    let y = 5
    function area()
    {
        return x+y
    }    
    return area
    
}
console.log(computation()());

//==========================================

