// const x = require('./module1.js'); 
// when you import any part or functionality you need to require it.
// const difference = require('./module1.js'); 

// when you require more than one function to import
// you need to import the object containing them
const obj = require('./module1')
obj.sum(10, 20);
obj.difference(45, 7);
obj.product(2, 6);
console.log(obj.userName);