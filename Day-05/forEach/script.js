let arr = [2,10,21,24];

// 
// function printArray(arr) {
//     for (let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// printArray(arr)


// forEach
// function printPretty(e) {
//     console.log(':', e);
// }

// function printArray(arr) {
//     for(let i=0; i<arr.length; i++) {
//         printPretty(arr[i])
//     }
    // arr.forEach((i)=>console.log(i));
    // arr.forEach(printPretty); // how does e gets i value?
    // arr.forEach(function printPretty(e) {
    //     console.log(':', e);
    // }); 
    // named callback function
    
    // arr.forEach(function (e) {
    //     console.log(':', e);
    // }); 
    // anonymous callback function
    
    // arr.forEach((a,) => console.log(': ', a)); // arrow callback function
    // single element: element

    // arr.forEach((a, b) => console.log('=> ', a, b)); // arrow callback function
    // two elements: element and its index

    // arr.forEach((a, b, c) => console.log(': ', a, b, c)); // arrow callback function
    // three elements: element, its index and array
    
    // arr.forEach((a, b, c, d) => console.log('=> ', a, b, c, d)); // arrow callback function
    // more than three elements will have undefined value   
// }

// printArray(arr)

// arr.map((a, b)=> console.log(a, b));