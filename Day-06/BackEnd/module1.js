console.log("...module 1...")
function sum (a,b) {
    console.log(a+b);
}

const difference = function(a, b) {
    console.log(a-b);
}

const product = function(a, b) {
    console.log(a*b);
}

const userName = 'Meenakshi';

// this whole file is considered a module
// module.exports = sum;

// module.exports = difference
// when you want to export more 
// than one item you can only export 
// a single object therefore you send 
// more than one functions inside an object

// module.exports = {
//     sum: sum,
//     difference: difference,
//     product: product
//      'name': name
// };
// bydefault if you donot give key then self name is given as a key to the function
module.exports = {
    sum,
    difference,
    product, 
    userName
};
