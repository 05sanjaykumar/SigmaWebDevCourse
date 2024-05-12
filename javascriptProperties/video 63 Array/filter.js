let arr =[1,2,3,4,5,6,7]
let newarr = []
for(let i =0;i<arr.length;i++)
{
    newarr.push(arr[i]**2)
}
console.log(arr)
console.log(newarr)

//another way of doing this is

// arr = arr.map((e)=>{  Method 1
//     return e**2
// })
// console.log(arr)

const mapping = (e)=>{ // Method 2
    return e**2
}
console.log("Mapped")
console.log(arr.map(mapping))

const greaterThanTen = (e)=>
{
    return (e>10)?true:false
}
console.log(arr.filter(greaterThanTen))
let ars = [1,2,3,4,5]
const red = (a,b)=>
{
    return a*b
}
console.log(ars.reduce(red))