async function getValue(p)
{
    let a = document.querySelector(".container");
    let div = document.createElement("div");
    div.setAttribute('class',"box");
    div.innerHTML = `<b>${p}</b>`
    a.append(div);
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random()*8000)));
}
async function main()
{
    let p = "Initializing Hacking"
    await getValue(p);

    p = "Reading your Files..."
    await getValue(p);

    p = "Password file Detected..."
    await getValue(p);

    p = "sending all passwords and personal files to the server..."
    await getValue(p);

    p = "Cleaning up..."
    await getValue(p);
}
main()
console.log("starting server")