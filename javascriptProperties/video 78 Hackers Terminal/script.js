async function getValue()
{
    let a = Math.floor(Math.random()*8000)
    return a;
}
async function main()
{
    let a = document.querySelector(".container");
    let p = "Initializing Hacking"
    let div = document.createElement("div");
    div.setAttribute('class',"box");
    div.innerHTML = `<b>${p}</b>`
    a.append(div);
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random()*8000)));

    p = "Reading your Files..."
    div = document.createElement("div");
    div.setAttribute('class',"box");
    div.innerHTML = `<b>${p}</b>`
    a.append(div);
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random()*8000)));

    p = "Password file Detected..."
    div = document.createElement("div");
    div.setAttribute('class',"box");
    div.innerHTML = `<b>${p}</b>`
    a.append(div);
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random()*8000)));

    p = "sending all passwords and personal files to the server..."
    div = document.createElement("div");
    div.setAttribute('class',"box");
    div.innerHTML = `<b>${p}</b>`
    a.append(div);
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random()*8000)));

    p = "Cleaning up..."
    div = document.createElement("div");
    div.setAttribute('class',"box");
    div.innerHTML = `<b>${p}</b>`
    a.append(div);
}
main()
console.log("starting server")