let n = 6
let arr = []
for(let i = 0;i<n;i++)
{
    arr.push(i+1)
}
const red = (a,b)=>
{
    return a*b
}
console.log(arr.reduce(red))