let a = 10;
let b = 15;
if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("Sorry this is not allowed");
}
let sum = a+b;
let x =3
try
{
    console.log(sum*x)
}
catch(err)
{
    console.log("Error was not handled")
}
finally
{
    console.log("Everything is finally owrking")
}