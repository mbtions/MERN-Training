const fs = require('fs')
const http = require('http')

const data = fs.readFileSync('./data.json', {encoding: 'utf8'});
const dataObj = JSON.parse(data).products

const cardTemplate = `
<div class='product-card'>
    <h3>__TITLE__</h3>
    <img src="__IMAGE__" />
    <a href="__PRODUCT__LINK__">More Info</a>
</div>
`

let result = [];
for (let i=0; i<dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('__TITLE__', dataObj[i].title);
    temp = temp.replace('__IMAGE__', dataObj[i].images[0]);
    temp = temp.replace('__PRODUCT__LINK__', `?id=${i}`);
    result.push(temp);
}
result = result.join(' ')
console.log(result);

const server = http.createServer((req, res)=>{
    console.log('Request Received...');
    console.log(res.url);
    // res.writeHead(200, 
    //     {
    //         'content-type': 'text/html'
    //     }
    // );
    res.end(result);
})

const HOST = 'localhost'
const PORT = 5500;
server.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
});