import fs from "fs/promises"

let a = await fs.readFile("Sanjay.txt")
let b = await fs.readFile("Sanjay.txt","\n\n\n\nthis is an Amazing project")
console.log(a.toString(),b)