// // REMOVING AN ELEMENT
// const parent = document.querySelector('div')
// const child = document.querySelector('p:nth-child(2)')
// console.log(parent)
// console.log(child)

// // element.remove();  // removes the whole element along with its child

// parent.removeChild(child);

// // using name attribute
// const heading = document.getElementsByName('heading');
// console.log(heading);
// heading[0].remove();

// prepend, before

// NODE VS ELEMENT

// Any interaction is an event

// EVENTS IN JS
// window.onload // browser does it

// Event Types

// function getInfo() {
//     console.log("Button Clicked!");
//     const div = document.querySelector('div')
//     const element = document.createElement('p');
//     element.innerText = "Hello! This is click event in JS."
//     div.prepend(element)
// }
// // using append only with string in parameter is waste use.

function getInfo(e) {
    console.log(e); // event Object
    // e.target is the element which has invoked the event
    const btn = e.target
    // btn.style.backgroundColor = "red"
    btn.setAttribute('style', 'color: red')
    btn.setAttribute('style', 'background-color: yellow')
    // overriding of setAttribute leads to only the last execution

    e.target.style.color = 'red';
    e.target.style.backgroundColor = 'yellow';
    e.target.style.position = 'absolute';
    e.target.style.top = '200px';
    e.target.style.left = '300px';
    // Therefore prefer DOM method for updating the same attributes   
}
