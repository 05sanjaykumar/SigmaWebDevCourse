let sk = document.getElementsByClassName("box");
sk[2].style.backgroundColor = "green";
let p = document.getElementById("bk");
p.style.backgroundColor="pink";

// let r = document.querySelector(".box"); #only selects  the first element
// console.log(r);
// r[3].style.backgroundColor = "purple";

(document.querySelectorAll(".box")).forEach(e =>
{
    console.log(e)
});
console.log("Doing again")
let rc  = document.querySelectorAll(".box"); 
for(let e = 0;e<rc.length;e++)
{
    console.log(rc[e]);
}