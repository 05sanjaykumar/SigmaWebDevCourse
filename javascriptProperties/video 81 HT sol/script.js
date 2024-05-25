const RandomDelay = ()=>{
    return new Promise((resolve,reject) => {
        let timeOut = Math.floor(Math.random()*8000)
      setTimeout(()=>{
        resolve()
      },timeOut)
    })
}
const addItems = async(e)=>{
    await RandomDelay()
    let a = document.querySelector(".container");
    let div = document.createElement("div");
    div.innerHTML = `<b>${e}</b>`
    a.append(div)
}
async function main()
{
    let a = document.querySelector(".container");
    setInterval((e) => {
        let last = a.lastElementChild;
        last.innerHTML = last.innerHTML+"."
    },700)
    let text = ["Initializing Hacking now reading your data","Reading your Files","Password file Detected", "sending all passwords and personal files to the server","Cleaning up"]
    
    for(const items of text){
        await addItems(items)
    }
}
main()