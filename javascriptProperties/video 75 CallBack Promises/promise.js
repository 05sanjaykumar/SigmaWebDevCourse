console.log("This is a promise")

let pro1 = new Promise((resolve,reject) => {
    if(Math.random()<0.5)
    {
        reject("This is not done");
    }
  setTimeout((e)=>{
    console.log("I am done")
    resolve("Sanjay")
  },1000)
})
let pro2 = new Promise((resolve,reject) => {
    if(Math.random()<0.5)
    {
        reject("This is not done 2");
    }
  setTimeout((e)=>{
    console.log("I am done 2")
    resolve("Sanjay 2")
  },1000)
})

// pro.then((a)=>
// {
//     console.log(a)
// }).catch((err) =>{
//     console.log(err)
// })
// The above code is for a single promise


let p3 = Promise.all([pro1,pro2])
p3.then((a)=>
{
    console.log(a)
}).catch((err) =>{
    console.log(err)
})


// let p3 = Promise.allSettled([pro1,pro2])
// p3.then((a)=>
// {
//     console.log(a)
// }).catch((err) =>{
//     console.log(err)
// })