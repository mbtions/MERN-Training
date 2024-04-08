// function sum (a, b) {
//     return a+b;
// }

// function print(x) {
//     console.log('  ****** ', x, ' ******');
// }

// const ans = sum(2,3);
// print(ans);

// HIGHER ORDER FUNCTIONS
function sum (a, b, fun) {
    ans = a+b;
    fun(ans);
}

function print(x) {
    console.log('  ****** ', x, ' ******');
}

sum(3, 5, print); // callback for sum is print

// Callback function
// async callback
// promises

// link for notes
// https://shorturl.at/lvzCQ