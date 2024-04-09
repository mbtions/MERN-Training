// console.log("Start")
// setTimeout(()=>console.log("Timeout.."), 0)
// console.log("End")

// setTimeout(()=> {
//     console.log("Timeout 1..")}, 
//     20000
// )
// console.log("Start")
// setTimeout(
//     ()=>console.log("Timeout 2.."), 
//     6000
// )
// console.log("Intermediate")
// console.log("End")


// console.log('start')
// function createOrder(itemName, fn) {
//     console.log(itemName);
//     setTimeout(()=> {
//         fn('minn1234')
//     }, 10000);
//     setTimeout(()=> {
//         fn('minn1234')
//     }, 10000);
// }
// // we don't know how much time will this function makePayment take?
// function makePayment(orderId) {
//     console.log(orderId);
// }
// createOrder('soap', makePayment);
// console.log('end')

// User defined promises
// const pr = new Promise((resolve, reject)=>{
//     if (true) { // if the condition is fulfilled then resolve
//         setTimeout(()=>{
//             resolve('done')
//         }, 
//         (Math.random()%5)*1000);
//     } else {
//         reject('Items Out of Stock!');
//     }
// });

// console.log(pr);
// setTimeout(()=>{
//     console.log(pr)
// }, 2000);

// pr.then((res)=>{
//     console.log(res);
// }) // gives undefined since no return value when called resolve();
// will print 'done' when passed to the function resolve('done')

// setTimeout(()=>{
//     console.log("TimeOut 1!")
// }, 0);
// const pr = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // reject('Items are out of stock!')
//         resolve('Done')
//     },
//     0)
// });
// const pr1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // reject('Items are out of stock!')
//         resolve('Done')
//     },
//     0)
// });
// const pr2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // reject('Items are out of stock!')
//         resolve('Done')
//     },
//     0)
// });
// const pr3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // reject('Items are out of stock!')
//         resolve('Done')
//     },
//     0)
// });
// const pr4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // reject('Items are out of stock!')
//         resolve('Done')
//     },
//     0)
// });
// setTimeout(()=>{
//     console.log("TimeOut 2!")
// }, 0);

// pr.then((res)=> {
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });

// pr1.then((res)=> {
//     console.log('1', res)
// }).catch((err)=>{
//     console.log(err)
// });

// pr2.then((res)=> {
//     console.log('2', res)
// }).catch((err)=>{
//     console.log(err)
// });

// pr3.then((res)=> {
//     console.log('3', res)
// }).catch((err)=>{
//     console.log(err)
// });

// pr4.then((res)=> {
//     console.log('4', res)
// }).catch((err)=>{
//     console.log(err)
// });

// const e = prettyPrint(()=>"hello");
// console.log(e);
// function prettyPrint(x) {
//     console.log(4);
// }


// setTimeout(function abc(){
//     console.log("TimeOut 1!")
// }, 0);

// const pr = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Done')
//     },
//     0)
// });

// pr.then(function b(res) {
//     console.log("Promise Completed! result:", res)
// }).catch((err)=>{
//     console.log(err)
// });

// setTimeout(function xyz(){
//     console.log("TimeOut 2!")
// }, 0);