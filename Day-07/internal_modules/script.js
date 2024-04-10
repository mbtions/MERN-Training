// Mini Project
const http = require('http'); // we need http to create server
const fs = require('fs');

// to read data.js
const data = fs.readFileSync('./data.json', {encoding: 'utf8'});
// const dataObj = JSON.parse(data); // parse is a sync process
// const products = dataObj.products;
const products = JSON.parse(data).products;

// const htmlTemplate = `
// <!DOCTYPE html>
//     <html lang='en-US'>
//         <head>
//             <style>
//                 .product-card {
//                     max-width: 500px;
//                     margin: 20px auto;
//                     border: 3px double brown;
//                     padding: 24px;
//                 }
//             </style>
//         </head>
//         <body>
//             __PRODUCT__CARDS__
//         </body>
//     </html>
// `
const htmlTemplate = fs.readFileSync('./templates/page.html', {encoding: 'utf8'});

// const cardTemplate = `
//     <div class="product-card">
//         <h4>__TITLE__</h4>
//         <p>__INFO__</p>
//     </div>
// `

const cardTemplate = fs.readFileSync('./templates/card.html', 'utf8');

// const card1 = cardTemplate.replace('__TITLE__', 'BCI Getting More Real').replace('__INFO__', 'Brain Computer Interface (BCI) is getting more real and peeping into the heads of humans.');
// const card2 = cardTemplate.replace('__TITLE__', 'Infinity is Complete').replace('__INFO__', 'Infinity introduced by Ramanujan, stands to something that has no end.');

// const card1 = cardTemplate.replace('__TITLE__', products[0].title).replace('__INFO__', products[0].description);
// const card2 = cardTemplate.replace('__TITLE__', products[1].title).replace('__INFO__', products[1].description);

// let allCards = card1;
// for(let i=1; i<products.length; i++) {
//     const card = cardTemplate.replace('__TITLE__', products[i].title).replace('__INFO__', products[i].description);
//     allCards += card
// }

// const allCards = card1+card2;

// fetch
// const url = '$'
// fetch(url).then((res)=>res.json()).then(console.log(data));
// arr
// loop

const allCards = products.map((elem)=>{
    let newCard = cardTemplate
    newCard = newCard.replace('__TITLE__', elem.title)
    newCard = newCard.replace('__INFO__', elem.description);
    return newCard;
});

const allCardsString = allCards.join(' ');

// const page = '<h1>Welcome</h1>';
const page = htmlTemplate.replace('__PRODUCT__CARDS__', allCardsString); // cardTemplate -> card1

const app = http.createServer((request, response)=>{
    console.log("Request received");
    console.log(request.url);
    
    // response.end("<h1>Namaste Node!</h1><h3>This is Backend JS</h3>"); // to end the work of sending response
    response.end(page);
    // response.write('End'); // it does not ends the response or work of sending response

    // writeHead
    response.writeHead(200, // it is the statusCode
        {
        'content-type': 'text/html', // it tells what type of content you are sending on the server
        }
    )
});
// app has all the functionalities of a server

// How to request?
// you need your app to run on a port, you will listen on a given port.
// app.listen(1400);
const port = 1400;
const host = 'localhost'
// you can also give details like port, host and a callback function (to perform some task while running) in the listen function
// const app = http.createServer(requestListener);
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});