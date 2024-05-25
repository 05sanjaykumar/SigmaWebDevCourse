// Created by myself

document.body.style.fontFamily = "sans-serif"

let container = document.querySelector(".container");
let box = document.createElement('div');
box.className = "box";
container.style.height = "120px";
container.style.border = "2px solid black";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.backgroundColor = "black";

box.style.height = "90%";
box.style.width  = "200px"
box.style.marginLeft = "3px";
box.style.position = "relative";
container.append(box);

let img = document.createElement("img");
img.className = "img"
img.src = "card.png"
img.style.height = "100%";
img.style.width = "100%";
img.style.borderRadius = "10px";
box.append(img)

let time = document.createElement("div")
time.className = "Time"
time.style.height = "10px"
time.style.backgroundColor = "rgba(0,0,0,0.6)";
time.style.position = "absolute";
time.style.bottom = "2px";
time.style.borderRadius = "5px"
time.style.right = "5px";
time.style.height = "20px";
time.innerHTML = "00 : 32"
time.style.width = "fit-content"
time.style.padding = "2px 5px"
time.style.color = "white"

box.append(time);

let Info = document.createElement("div");
Info.style.height = "100%"
Info.style.display = "flex";
Info.style.alignItems = "center";
Info.style.flexDirection = "column";

container.append(Info);

let Name = document.createElement("div");
Name.style.height = "20px"
Name.style.color = "white";
Name.innerHTML = "<b>Installation VS code & How Website Work | Sanjay Web Development Course - Tutorial #1</b>"
Name.style.marginLeft= "10px";
Name.style.fontSize = "20px";
Info.append(Name);

let OtherInfo = document.createElement("div");
OtherInfo.style.height = "100%"
OtherInfo.style.display = "flex";
OtherInfo.style.justifyContent = "flex-start";
OtherInfo.style.flexDirection = "row";
OtherInfo.style.marginTop = "10px";
Info.append(OtherInfo);

let OtherName = document.createElement("div");
OtherName.style.height = "20px"
OtherName.style.color = "white";
OtherName.innerHTML = "Sanjay Kumar S"
OtherName.style.marginLeft= "10px";
OtherInfo.append(OtherName);

let views = document.createElement("div");
views.style.height = "20px"
views.style.color = "white";
views.innerHTML = "727K views"
views.style.marginLeft= "10px";
OtherInfo.append(views);

let Ago = document.createElement("div");
Ago.style.height = "20px"
Ago.style.color = "white";
Ago.innerHTML = "2 months ago"
Ago.style.marginLeft= "10px";
OtherInfo.append(Ago);