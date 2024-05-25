
// async function getData()
// {
//     return new Promise((accept,reject) => {
//         if(Math.random()<0.6)
//             {
//                 reject(466)
//             }
//         setTimeout((e) => {
//           accept(455)
//         },1500)
//     })
// }

async function getData()
{
    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await a.json()
    console.log(data)
}

async function main()
{
    console.log("loading...")
    console.log("Fetching Data")

    let g = await getData().catch((e) => {
      console.log(e)
    })
    console.log(g)
    console.log("code completed")
}
main()