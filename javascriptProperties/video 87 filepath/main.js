const { error } = require("console")
const fs = require("fs")
// console.log(fs)

console.log("Starting")
// fs.writeFileSync("Sanjay.txt","Sanjay is a good guy")
// fs.writeFile("Sanjay.txt","Sanjay  is a good guy",()=>{
//     console.log("Done")
//     fs.readFile("Sanjay.txt",(error,data)=>{
//         console.log(error,data)
//     })
// })
fs.appendFile("Sanjay.txt"," Sanjay Kumar is also really great person", (e,d)=>{
    console.log(d)
})
console.log("Ending")