let obj = 
{
    name: "sanjay",
    role: "coder and tutor",
    company:"Devs Union"
};
for(const key in obj)
{
    const ab = obj[key];
    console.log(key,ab);
}
for(const s of "testing")
{
    console.log(s);
}
for(const s in "testing")
{
    console.log(s);
}
