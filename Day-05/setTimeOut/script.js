// console.log('GEC start');

// function printPretty () {
//     console.log("prettyStart")
//     let ans = 2+3;
//     console.log(ans)
//     console.log("prettyEnd")
// }

// setTimeout(printPretty, 10000); // time is in milliseconds

// console.log('GEC end');

// for button event handler
function printPretty () {
    console.log("prettyStart")
    let ans = 2+3;
    console.log(ans)
    console.log("prettyEnd")
}

// dynamic event handler button
const btn = document.getElementById('btn');
btn.addEventListener('click', printPretty);