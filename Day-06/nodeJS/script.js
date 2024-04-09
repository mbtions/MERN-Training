// FIGLET
// const figlet = require('figlet');

// figlet("best", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
// });

// makePayment => promises or callback => async await method or .then.catch method

// fetch("https://api.github.com/users/mbtions").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error Occured!");
// })
// This is an old method, new method using async await

// ASYNC AWAIT
// console.log('Start')
// async function getAPI() {
//     // const pr = await fetch("https://api.github.com/users/mbtions"); 
//     // try to use setTimeout here.
//     const pr = await fetch("https://api.github.com/users/mbtions"); 
//     console.log('Making JSON');
//     const data = await pr.json();    
//     console.log('Fetched Data');
//     console.log("Hello");
//     console.log("Hello");
// }
// getAPI();
// console.log("End");


// console.log('Start');
// async function getAPI() {
//     const pr = await fetch("https://api.github.com/users/mbtions"); 
//     console.log('Making JSON');
//     const data = await pr.json();    
//     console.log('Fetched Data');
//     console.log("Hello");
//     console.log("Hello");
// }
// console.log("End");

console.log("start");
async function getAPI() {
    const pr = await new Promise((resolve, reject)=>{
      console.log('promise started');
      setTimeout(()=>{
        console.log('timeout 1...');
        resolve('done');
      }, 5000);
    })
    console.log('promise completed');
    // const pr2 = new Promise((res, rej)=> {
    //   console.log("promise 2");
    //   setTimeout(()=>{
    //     console.log('timeout 1...'),
    //   }, 5000);
    // });
}
getAPI();