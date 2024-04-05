// // Do not declare primitive datatype as objects
// let a = new String('Hello');
// let b = 'Hello';

// if (a==b) console.log('yes');
// if (a===b) console.log('yes');

// ======

const obj = {
    name: 'Ajay',
    lastName: 'Popli'
}

// console.log(obj);

// const obj1 = {
//     "name": 'Ajay',
//     "lastName": 'Popli'
// }

// console.log(obj1);
// obj.age = 20;
// document.write(JSON.stringify(obj));


// ------======------

// let arr = [1,2,3,4]
// arr = [3,2,4]
// console.log(arr)

// // const arr2 = [1, 2, 4, 5];
// // arr[10] = 3;
// // console.log(arr);
// // // array in JS allows updating data at an index 
// // // with a huge gap, say at 1000 index, then all 
// // // in between indices are assigned "empty"

// console.log(typeof(arr))
// console.log(typeof(obj))
// // To check whether an object is array or not
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));


// function isObject(x) {
//     if(Array.isArray(x)) {
//         console.log("Not Object")
//     } else if (typeof(x)=="object"){
//         console.log("Object");
//     }
// }

// isObject([1,2,3,4]);
// isObject({name: 'Vinesh'})

// if (obj.constructor === Object) {
//     console.log("yes")
// }

// ===================

// const arr1 = ['usr', 2, true]
// const obj2 = {
//     0: 56,
//  	1: 'ajay', 
//     age: 20,
// }

// // Q. forOf, forIn Loops?

// for (let i=0; i<2; i++) {
//  	console.log(obj2[i]);
// }
// for (let i=0; i<2; i++) {
//     console.log(arr1[i]);
// }

// for (let i of arr1) {
//     console.log(i)
// }

// // for (let i of obj2) {
// //     console.log(i)
// // }
// // will cause error since not iterable.

// for (let i in arr1) {
//     console.log(i)
// } // will give indices

// for (let i in obj2) {
//     console.log(i)
// } // will give key-name in key-value pair

// ===============================
// DOM

// console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)
// console.log(document)
// console.dir(document)

// ==================
// ITERABLES
// const res = document.getElementsByTagName('h3');
// console.log(res)

// =================
// ID selector
// const res1 = document.getElementById('ht1');
// console.dir(res1)

// QuerySelectorAll
// const res = document.querySelectorAll('h3');
// const res1 = document.querySelectorAll('h3#ht2');
// const res2 = document.querySelectorAll('h3.c1'); // h3 with the class c1
// const res3 = document.querySelectorAll('h3 .c1'); // all classes inside h3 will be checked
// const res4 = document.querySelectorAll('div>h3'); // all h3 child in div will be checked

// console.log(res)
// console.log(res1)
// QuerySelector


// Properties of an element
// const res = document.getElementById('ht1');
// res['innerText'] = 'Hello world'
// console.log(res)

// const res1 = document.getElementsByTagName('div')
// // res1[0]['innerText'] = "<h4>Hello World!</h4>"
// res1[0]['innerHTML'] = "<h4>Hello World!</h4>"

// const res = document.getElementsByTagName("p")
// console.log(res)

// res[0].setAttribute('tagName', 'h1')
// // will create a new attribute named "tagName" with value "h1"

// res[0].setAttribute('class', 'para1')

//=====================================
// for newhtml.html file
const ne = document.createElement("h3");
ne.innerText = "Dynamic Text";
console.log(ne);

// To add into the html.
document.body.appendChild(ne) // appends at the end of the body

// add child
const divs = document.getElementsByTagName("div")
divs[0].appendChild(ne);
divs[1].appendChild(ne);
// same element cannot be appended to only one place 
// therefore clone the element and then use multiple places.
// since there may be different elements with same id which is conflicting therefore no more than one place, it can be added.


// remove child
const elems = document.getElementsByTagName("p")
divs[0].removeChild(elems[0])