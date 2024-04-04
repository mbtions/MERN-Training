// // // // // // // // // // // // // // // JS Intro
// // // // // // // // // // // // // // console.log("Hello");

// // // // // // // // // // // // // // var dash1 = 'loosely-typed'
// // // // // // // // // // // // // // var dash2 = 'dynamically-typed'
// // // // // // // // // // // // // // // Dynamically-typed: You donot need to change the type
// // // // // // // // // // // // // // // Loosely-typed: Data type can be changed later
// // // // // // // // // // // // // // // ex: var age = 18;
// // // // // // // // // // // // // // //     age = "got it";

// // // // // // // // // // // // // // console.log("JavaScript is "+ dash1 +" and " + dash2);

// // // // // // // // // // // // // // //if initialised later then?

// // // // // // // // // // // // // // console.log(num);
// // // // // // // // // // // // // // var num = 7;

// // // // // // // // // // // // // // console.log(num);
// // // // // // // // // // // // // // // This is called Hoisting (assigns undefined only to var variables)
// // // // // // // // // // // // // // // Two cycles: Scanning and Execution

// // // // // // // // // // // // // // // Scope:
// // // // // // // // // // // // // // // var is function scoped.
// // // // // // // // // // // // // // // If not defined message then console produces error
// // // // // // // // // // // // // // console.log(message);

// // // // // // // // // // // // // //=========================

// // // // // // // // // // // // // function env () {
// // // // // // // // // // // // //     console.log(message);   // undefined
// // // // // // // // // // // // //     var message = "hello";
// // // // // // // // // // // // //     console.log(message);   // hello
// // // // // // // // // // // // //     var message = "else";
// // // // // // // // // // // // //     console.log(message);   // else
// // // // // // // // // // // // // }

// // // // // // // // // // // // // env();
// // // // // // // // // // // // // // function scope
// // // // // // // // // // // // // // Due to Hoisting: undefined is initial value
// // // // // // // // // // // // // // Re declaration is allowed

// // // // // // // // // // // // // ============================

// // // // // // // // // // // // function env () {
// // // // // // // // // // // //     for (var i=0; i<5; i++)
// // // // // // // // // // // //      {
// // // // // // // // // // // //         console.log("--", i);
// // // // // // // // // // // //      }
// // // // // // // // // // // //      console.log(i);
// // // // // // // // // // // // }

// // // // // // // // // // // // env();
// // // // // // // // // // // // // Leads to looseness out of control therefore let was introduced, which is srtict in many aspects.

// // // // // // // // // // // // let : scope is within block i.e {}
// // // // // // // // // // // {// block start
// // // // // // // // // // //     let message = "hello"
// // // // // // // // // // // }// block end

// // // // // // // // // // // console.log(message);

// // // // // // // // // // // // In ES6 2015 version
// // // // // // // // // // // // LET: block-scoped
// // // // // // // // // // // // Re-declaration is not allowed
// // // // // // // // // // // // Hoisted but different (placed in temporal zone or store) 
// // // // // // // // // // // // => Shows cannot access the message variable

// // // // // // // // // // // CONST : block-scoped 
// // // // // // // // // // // Introduced on ES6
// // // // // // // // // // // Redeclaration as well as reassignment are not allowed
// // // // // // // // // // // should be initialised
// // // // // // // // // // // const message = "hello";

// // // // // // // // // // // // ALERT
// // // // // // // // // // // pumpkin = "100" // Q. default type?
// // // // // // // // // // // alert(pumpkin);

// // // // // // // // // // // // extension is permissioned to access whole website and javascript.

// // // // // // // // // // // DATA TYPES: Primitives/Non-Primitives
// // // // // // // // // // let age = 18;
// // // // // // // // // // console.log(typeof(age));

// // // // // // // // // // let s = "computer"
// // // // // // // // // // p = "computer"

// // // // // // // // // // console.log(s===p)

// // // // // // // // // // // Primitive data types are immutable in JS

// // // // // // // // // // // JS datatypes
// // // // // // // // // // // Q. Tutorials of w3Schools
// // // // // // // // // // // Q. Undefined vs Null
// // // // // // // // // // // Object Datatype: =>
// // // // // // // // // // // 1. object, 
// // // // // // // // // // // 2. array, 
// // // // // // // // // // // 3. date

// // // // // // // // // // camelCase in JS
// // // // // // // // // let userAge = "abcd"

// // // // // // // // let arr = ['a', 'b', 'c','d'];
// // // // // // // // arr[0] = 'abcd';
// // // // // // // // console.log(arr);

// // // // // // // // Type Coercion
// // // // // // // let str="12"
// // // // // // // let age=20
// // // // // // // let vote=18

// // // // // // // let ans = age+vote+str // in case of '-' 
// // // // // // // console.log(ans); // 3812
// // // // // // // ans = str+age+vote // in case of '-' 
// // // // // // // console.log(ans); // 122018
// // // // // // // ans = age-str
// // // // // // // console.log(ans); // 8
// // // // // // // console.log('12'*'12'); // 144

// // // // // // // ans = age - -str;
// // // // // // // console.log(ans); 


// // // // // // // Q. parseInt(str) vs Number(str)

// // // // // // let str = '12.12'
// // // // // // let p = parseInt(str)
// // // // // // let q = Number(str)

// // // // // // console.log(p, q)

// // // // // // let a = '12'
// // // // // // let b = 12

// // // // // // if (a==b) {
// // // // // //     console.log('yes')
// // // // // // } else { console.log('no') }

// // // // // // if (a===b) {
// // // // // //     console.log('yes again')
// // // // // // } else { console.log('no') }

// // // // // // let a = ['a', 'b', 'c', 'd'];
// // // // // // let cpy = a;
// // // // // // if (a==cpy) {
// // // // // //     console.log('yes')
// // // // // // } else { console.log('no') }

// // // // // // if (a===cpy) {
// // // // // //     console.log('yes again')
// // // // // // } else { console.log('no') }


// // // // // let a  = ['a', 'b', 'c', 'd'];
// // // // // let cpy = [...a]; // space operator, has different address but same content.
// // // // // if (a==cpy) {
// // // // //     console.log('yes')
// // // // // } else { console.log('no') }

// // // // // if (a===cpy) {
// // // // //     console.log('yes again')
// // // // // } else { console.log('no') }

// // // // // // != !==

// // // // // TEMPLATE LITERALS: Q. Why used? more efficient
// // // // const username = 'Meenakshi';
// // // // const str = `My name is: ${username}`;
// // // // console.log(str);

// // // // FUNCTIONS IN JS
// // // function print(str="nothing is here") {
// // //     console.log(str)
// // // }

// // // print("hello");
// // // print() // default value

// // // // 
// // // function sum(a, b) {
// // //     if (a && b) { // Q. Logical Operators
// // //         console.log(a+b);
// // //     } else {
// // //         console.log(a); // undefined values are considered false values
// // //     }
    
// // // }
// // // sum();  // NaN, when logical op => undefined
// // // sum(10);  // 10
// // // sum (3,2); // 5

// // // // Falsy Values
// // // // => Undefined, Null, false, 0, '' {empty string}

// // // function sub(a, b) {
// // //     if (a && b) { // Q. Logical Operators
// // //         console.log(a-b);
// // //     } else if (a) {
// // //         console.log(a); // undefined values are considered false values
// // //     } else  {
// // //         console.log(0);
// // //     }    
// // // }

// // // sub()
// // // sub(2)
// // // sub(4,3)

// // // ARROW FUNCTIONS
// // // normal function
// // function print() {
// //     console.log("-N-")
// // }
// // // function assignment (named)
// // const a = function print() {
// //     console.log("-n-");
// // }
// // // function assignment (anonymous)
// // const fun1 = function() {
// //     console.log("-a-");
// // }
// // print()
// // a()
// // fun1()

// // // why all these different types of functions? 
// // // => To reduce inconsisitencies as function can be defined with same name more than once.

// // // arrow function assignment
// // let c = ()=>{
// //     console.log("--");
// // }

// // // Q. return a value from an arrow function

// // CONDITIONAL STATEMENTS
// // Switch
// let a = 2;
// switch(a) {
//     case 1: {
//         console.log(1);
//         break;
//     }
//     case 2: {
//         console.log(2);
//         break;
//     }
//     case 3: {
//         console.log(3);
//         break;
//     }
//     default: console.log('not {1, 2, 3}');
// }

// // Q. Null == Undefined ?
// // Q. Null === Undefined ?

// // OBJECTS in JS

// // const obj = {}
// const obj = new Object(); // initialization
// obj[1] = 'one';
// obj[2] = 'two';
// obj['name'] = 'meenakshi'
// obj[12] = 'twelve';  // key-value pair
// console.log(obj);

// const obj1 = {
//     15 : 'fifteen',
//     3 : 'three',
//     'firstName' : 'Saraswati',
//     'lastName' : 'Chandra',
//     12 : 'twelve'
// };
// console.log(obj1)
// let fullName = `${obj1.firstName} ${obj1.lastName}`;
// console.log(fullName)

// INPUT in JS
// Prompt
const obj = {
    'firstname': 'Ajay',
    'lastName' : 'Popli',
    'age': 44,
    'address': 'Delhi'
};
const x = prompt('Please tell me the property to Know');
console.log(obj[x]);