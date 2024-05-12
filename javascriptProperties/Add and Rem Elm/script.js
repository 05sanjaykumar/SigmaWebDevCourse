let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let div = document.createElement("div")
    let p = prompt("enter a the text you wish")
    div.innerHTML = `<b>${p}</b>`
    div.setAttribute("class","box")
    document.querySelector(".container").append(div);
})
let del = document.getElementById("del")
del.addEventListener("click",()=>
{
    let elm = document.querySelectorAll(".box")
    c = document.querySelector(".box")
    if(c)
    {
        elm[elm.length-1].remove()
    }
})