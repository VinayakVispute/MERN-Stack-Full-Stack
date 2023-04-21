// setTimeout(() => console.log("third"), 2000);

// function sync() {
//   console.log("First");
// }

// sync();

// console.log("second");

// Promises

// let meraPromise1 = new Promise((resolve,reject)=>{
//  setTimeout(()=>console.log("I am inside Promise1"),5000)
//  resolve();
// })
// let meraPromise2 = new Promise((resolve,reject)=>{
//  setTimeout(()=>console.log("I am inside Promise2"),3000)
//  resolve();
// })

// console.log("Pehla Pyaar")


//===========

/*
let meraPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hey !!! I am inside the Promise");
  }, 3000);
  reject(new Error("Sorry Man You Got a Error"));
})
  .then((returnValue) =>
    console.log("This is the value returned by the Promise: " + returnValue)
  )
  .catch((error) => console.log("It Failed"));


  console.log("I am First Man");
*/


let firstPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>
  console.log("setTimeout1 Started"),2000);
  resolve(true);
})

let outPromise = firstPromise.then(()=>{
  let secondPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>
    console.log("setTimeout2 Started"),
    3000);
    resolve("secondPromise Resolved")
  })
  return secondPromise
}).then((value)=>console.log(value))