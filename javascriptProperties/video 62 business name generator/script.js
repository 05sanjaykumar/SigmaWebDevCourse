function Adjective()
{
    let a="Creazy"
    let b= "Amazing"
    let c= "Fire"
    let d = Math.floor(Math.random()*3)
    if(d == 0)
    {
        return a;
    }
    else if(d == 1)
    {
        return b;
    }
    else
    {
        return c;
    }

}
function ShopName()
{
    let a="Engine"
    let b= "Foods"
    let c= "Garments"
    let d = Math.floor(Math.random()*3)
    if(d == 0)
    {
        return a;
    }
    else if(d == 1)
    {
        return b;
    }
    else
    {
        return c;
    }
}
function AnotherWord()
{
    let a="Bros"
    let b= "Limited"
    let c= "Hub"
    let d = Math.floor(Math.random()*3)
    if(d == 0)
    {
        return a;
    }
    else if(d == 1)
    {
        return b;
    }
    else
    {
        return c;
    }
}
let adj = Adjective();
let sh = ShopName();
let Aw = AnotherWord();
console.log(`The name is ${adj} ${sh} ${Aw}`);