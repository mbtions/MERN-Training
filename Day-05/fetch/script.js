console.log('start')

// network tab under browser
// const req = fetch("https://api.github.com/users/mbtions");
// console.log(req); // initially promise is pending

// promises have 3 phases
// pending, fulfilled, 

// req.then(() => console.log("Fetched!")); 
// when this request is fulfilled and this part will be kept by the browser, and then executes just as when gets response.

// fetch('https://dummyjson.com/products/1')
// .then(res => console.log(res))
// // .then(res => res.json())
// // .then(json => console.log(json))

// we converted ReadableStream data packets into json, which is again asynchronous therefore res.json() is used.

// const req = fetch("https://dummyjson.com/products/1");
// const res = req.then(res => res.json())
// res.then((data)=>console.log(data)); 

fetch("https://dummyjson.com/products/1")
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err) => {
    console.log("Error Caught!"); // catches all the error in above chains
});

console.log('end');