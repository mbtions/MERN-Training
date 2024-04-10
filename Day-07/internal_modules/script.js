// // File System using Synchronous API
// // const fs = require('fs') // you may or may not include 'node:' before fs in require

// // reading a FILE
// // const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});
// // // console.log(data.toString())
// // console.log(data)

// // writing a FILE
// // fs.writeFileSync('./logs.txt', '10th April (Day-07): File System and HTTP')

// // console.log("Start")
// // const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});
// // console.log(data)
// // console.log("End")

// // File system using Promises API
// // most recent
// // console.log("Start");
// // const fsPromises = require('fs/promises');
// // const pr = fsPromises.readFile('./myReadMe.txt', {encoding: 'utf8'}); // returns a promise
// // console.log(pr);
// // pr.then((result)=>{
// //     console.log(result);
// // }).catch((err)=>{
// //     console.log("File Not Found!");
// // });
// // console.log("End");


// // File System using Callback API
// const fs = require('fs');
// fs.readFile('./myReadMe.txt', {encoding: 'utf8'}, (err, data)=>{
//     console.log(data);
// });
// // if readFileSync used, it will not work!
// // use readFile
// // using API