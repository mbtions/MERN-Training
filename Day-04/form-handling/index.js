const firstNameChange = (e) => {
    // console.log(e);
    // console.log('firstName')
}
// when you press enter it itself submits the form therefore console will be wiped out.


// const firstNameChange = (e) => {
//     const val = e.target.value;
//     if (val.length > 3  ) {
//         console.log('correct')
//     }
// }
// when 'onkeydown' event count will be after 5
// when 'onchange' event count will be after 4

// onkeydown event
// 1st key press => undefined value
// 2nd key press => 1st value
// 3rd key press => 2nd value
// 4th key press => 3rd value

// EVENT DELEGATION in JS
// Rather than each child given a function, give a function to the parent itself.

const submitForm = (e) => {
    e.preventDefault();
    const t = e.target  // this target is an iterable
    const res = {
        hobbies: [] // for checkbox values
    };
    for (let i=0; i<t.length; i++) {
        // console.dir(t[i])      
        // console.dir(t[i].type)  
        // console.dir(t[i].value)
        const ty = t[i].type;

        // if (ty=='checkbox') {
        //     console.log(t[i].checked);
        // }
        if (ty!='submit') {
            const vl = t[i].value;
            const nm = t[i].name;

            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty != 'checkbox') {
                res[nm] = vl;
            }
        }
    }
    console.log(res);
}
// we use e.preventDefault(); since this func will not work since just as it submits, it then refreshes all the value and makes the data disappear 

// Validation: Form filled or Error for Unfilled Values

