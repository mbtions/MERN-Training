const fs = require('fs')
const http = require('http')
const url = require('url')

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
    temp = temp.replace('__PRODUCT__LINK__', `/product?id=${i}`);
    result.push(temp);
}
result = result.join(' ');

const server = http.createServer((req, res)=>{
    console.log('Request Received...');
    // const route = req.url;
    
    // const path = url.parse(req.url);
    // const pathname = path.pathname;

    // 'true' is for query to be parsed as an object
    const {pathname, query} = url.parse(req.url, true); // de-structuring 
    // console.log(pathname)
    // console.log(query);
    if (pathname === '/home') {
        res.end(result);
    } 
    else if (pathname === '/product') {
        const id = query.id;
        let productPage = `
        <!DOCTYPE html> 
        <html>
            <head>
                <style>
                    .product-card {
                        width: 80%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        flex-direction: row;
                    }
                </style>
            </head>
            <body>
                __PRODUCT__DATA__
            </body>
        </html>
        `
        const productData = dataObj[id];
        let productTemplate = `
        <div class='product-card'>
            <img src="__IMAGE__" />
            <div>
                <h3>__TITLE__</h3>
                <p>__DESCRIPTION__</p>
                <h4>__PRICE__</h4>
                <button>BUY</button>
            </div>
        </div>
        `
        productTemplate = productTemplate.replace('__TITLE__', productData.title).replace('__IMAGE__', productData.images[0]).replace('__DESCRIPTION__', productData.description).replace('__PRICE__',  '&#8377;'+productData.price+'/-');

        productPage = productPage.replace('__PRODUCT__DATA__', productTemplate);
        res.end(productPage);
        
        // res.end('Product '+query.id);
        // console.log(dataObj[id]);
        // res.end(dataObj[id].title);
    } 
    else if (pathname === '/about') {
        res.end("My name is Meenakshi");
    }
    else {
        res.end('404... Page Not Found!!');
    }
    // res.writeHead(200, 
    //     {
    //         'content-type': 'text/html'
    //     }
    // );
})

const HOST = 'localhost'
const PORT = 5500;
server.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
});