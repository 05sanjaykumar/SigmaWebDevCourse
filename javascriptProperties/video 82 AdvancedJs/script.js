async function sleep()
{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(45)
        reject(55)
      },500)
    })
}
(async function main(){
    // let a = await sleep();
    // console.log(a)
    // let b = await sleep();
    // console.log(b)
    // let [x,y, ...varargs] = [2,3,4,5,6,7,8]
    // console.log(x,y,varargs)

    let obj = {a:1,b:2,c:3};
    let {a,b} = obj
    let arr = [1,4,5]
    console.log()
})()