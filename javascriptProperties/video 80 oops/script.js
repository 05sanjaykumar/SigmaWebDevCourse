// let obj ={
//     a: 1,
//     b: "sanjay"
// };
// console.log(obj)
// let animal = {
//     eat:true
// };
// let rabbit = 
// {
//     jumps:true
// };
// rabbit.__proto__ = animal

class Animal
{
    constructor(name)
    {
        this.name = name
        console.log(`the object ${name} is created`)
    }
    eats()
    {
        console.log("This is eating nothing obje")
    }
    jumps()
    {
        console.log("This is jumping")       
    }
}

class Lion extends Animal
{
    constructor(name)
    {
        super(name)
        console.log("Object lion Created")
    }
    eats()
    {
        console.log("It might be eating")
        super.eats()
    }
}
let obs = new Animal("Bunny");
obs.eats()
let leon = new Lion("Sher");