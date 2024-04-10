// const obj = new Object(); 
// it is a global object

// we have a global constructor
const b = new Buffer.from('abcxyz');
console.log(b);
console.log(b.toString());
// try .write
b.write('ABCD')
console.log(b.toString());