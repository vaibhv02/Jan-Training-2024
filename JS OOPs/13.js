// let arr = [11, 0, 37, 12, 0, 7]
//push all 0 elements to the last index [11,37,12,7,0,0]


let arr = [11, 0, 37, 12, 0, 7];
let brr = 0;
let i,j;

for (i = 0; i < arr.length; i++) 
{
    if (arr[i] !== 0) 
    {
        arr[brr] = arr[i];
        brr++;
    }
}
for (j = brr; j < arr.length; j++) 
{
    arr[j] = 0;
}

console.log(arr);

