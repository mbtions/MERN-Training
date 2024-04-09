console.log("Hello");
// const arr = [10, 22, 33]

// const ans = arr.forEach((a) => {
//     console.log(a);
// });

// console.log(ans)
// // result in undefined since forEach does not returns anything

// MAP 
// const result = arr.map((a) => {
//     return a;
// });
// console.log(result)

// const doubled = arr.map((a) => {
//     return a*2;
// });
// console.log(doubled)

// const exponent = arr.map((a) => a**2);
// console.log(exponent)

// const arr2 = [10.11, 22.32, 33.71];
// const answer = arr2.map(a=>parseInt(a))
// console.log(answer)
// map function always gives a new array of resulted elements

// FILTER
// const arr = [10, 22, 33];
// const ans = arr.filter((a)=>{
//     if (a>20) return true;
//     else return false;
// });
// console.log(ans);

// const arr = [
//     'Delhi', 'Mumbai', 'Chennai', 'Pune', 'Hrishikesh', 'Ghaziabad', 'Dehradoon', 'Surat', 'Ranchi', 'Panaji', 'Indore'
// ]

// const citiesI = arr.filter((city)=>{
//     for (i of city) {
//         if (i=='i' || i==='I'){
//             return city
//         }
//     }
// })

// console.log(citiesI)

// const citiesI = arr.filter((city)=>{
//     if (city.includes('i') || city.includes('I')) return city
// })
// console.log(citiesI)


// const cities = [
//     'Delhi, India', 
//     'Chennai, INDIA',
//     'Beijing, China',
//     'New York, USA',
//     'Shanghai: China',
//     'Texas, USA',
// ]

// const answer = cities.filter((a)=>{
//     ns = a.toLowerCase();
//     if (ns.includes('india')) return true
//     else return false
// })
// const ans = cities.filter((city)=>city.toLowerCase().includes('india'));
// console.log(answer)
// console.log(ans)

// toUpperCase only India => use replace

// REDUCE
// const arr = [2, 4, 8, 10];
// const arr = [10, 22, 34, 50];

// returns a single value: the function's accumulated result

// const ans = arr.reduce((total, current, index, array)=>{
//     console.log(total, current, index, array)
//     return total+current
// });

// 1st value is an accumulator and remaining values are
// console.log(ans)

// const arr = ['ab', 'cd', 'xy', 'z']
// const ans = arr.reduce((total, current, index, array) => {
//     console.log(total, current, index, array)
//     // return total+current // when we not return we will have undefined values for rest of the places except first.
// });
// console.log(ans);