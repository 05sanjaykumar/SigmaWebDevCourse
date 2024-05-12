async function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3000)
    })
}
async function main()
{

    console.log("Modules loaded")
    console.log("Do something else")
    
    console.log("Get the Data")
    let data = await getData()
    console.log(data)
    console.log("Processed data")
    console.log("Task 2")
}
// data.then((e)=>{

//     console.log(data)
//     console.log("Processed data")
//     console.log("Task 2")
// })

main()