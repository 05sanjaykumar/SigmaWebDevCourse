console.log("Sanjay")
console.log("Kumar")
setTimeout((e)=>
{
    console.log("Hello")
},1000)
setTimeout((e)=>
{
    console.log("Hello 2")
},1000)
console.log("Hello world")
const callBack  = (arg) => {
  console.log(arg)
}

const loadScript = (src, callBack) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callBack("Sanjay");
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callBack)