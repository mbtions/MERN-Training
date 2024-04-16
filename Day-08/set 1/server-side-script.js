const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync('./data.json', {encoding: 'utf8'});
const dataObj = JSON.parse(data).products

const homeTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                font-family: candara;
            }
            body {
                /*background-color: black;*/
                background-color: rgb(227, 230, 230);
            }
            header{
                max-height: 20vh;
                min-height: 18vh;
                /*background-color: #e8dfdf;*/
                background-color: #131921;
                color: white;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: larger;
            }
            .logo{
                font-weight: bold;
            }
            .product-card{
                max-width: 50%;
                padding: 24px;
                background-color: white;
                margin: auto;
                display: flex;
                flex-basis: 2em;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                /*border: 1px solid transparent;*/
                border-radius: 20px;
                margin: 25px auto;
                transition-property: scale;
                transition-duration: 0.3s;
                transition-timing-function: ease-in-out;
            }
            .product-card img{
                width: 40vw;  
                margin: 10px;
                border-radius: 8px;
                margin: 8px;
            }
            .product-card:hover{
                scale: 1.1;
            }
            .deal-offer{
                margin: 8px;
                color: rgb(204, 12, 57);
            }
            .deal-offer span{
                background-color: rgb(204, 12, 57);
                color: white;
                padding: 8px;
                border-radius: 2px;
            }
            footer{
                padding: 24px;
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                justify-content: center;
                max-height: 40vh;
                min-height: 20vh;
                background-color: rgb(19, 26, 34);
                color: white;
            }
            footer a{
                text-decoration: none;
                color: white;
            }
            .description {
                margin: 8px;
            }
            .more-info-link{
                text-decoration: none;
                color: #007185;
            }
            .more-info-link:hover{
                color: rgb(204, 12, 57);
                text-decoration: underline;
            }
            .nav-link{
                flex-grow: 1;
            }
            .search-bar{
                flex-grow: 2;
            }
            .nav-link a{
                text-decoration: none;
                color: white;
            }
            .search-bar button{
                margin: 8px auto; 
                color: white; 
                background-color:orange; 
                border:none; padding: 8px; 
                border-radius: 2px;
            }
            .search-bar input{
                border: none;
                padding: 8px;
                border-radius: 2px;
            }
        </style>
    </head>
    <body>
        <header>
           <div class="nav-link logo">YourChoice</div>
           <div class="nav-link home"><a href="/home">Home</a></div>
           <div class="nav-link search-bar">
            <form action="/product">
                <input type="text" name="productName" id="searchBox" value="" placeholder="Search">
                <button type="submit">Search</button>
            </form>
           </div>
           <div class="nav-link contact"><a href="/contact">Contact</a></div>
        </header>
        __PRODUCTS__CARD__
        <footer>
            <h2>YourChoice</h2>
            <br>
            <p>Copyright (c) 2024 | All rights reserved | <a href="mailto:workbymeenakshi@gmail.com">workbymeenakshi@gmail.com</a></p>
        </footer>
    </body>
</html>
`
const cardTemplate = `
<div class='product-card'>
    <h3>__TITLE__</h3>
    <img src="__IMAGE__" />
    <div class="deal-offer">
    <p><span>__DISCOUNT__PERCENTAGE__% off</span> Limited time deal</p>
    </div>
    <h4>$__PRICE__/-</h4>
    <p>__STOCK__INFO__</p>
    <p class="description">__DESCRIPTION__</p>
    <a class="more-info-link" href="__PRODUCT__LINK__">More Info</a>
</div>
`

let result = [];
for (let i=0; i<dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('__TITLE__', dataObj[i].title);
    temp = temp.replace('__IMAGE__', dataObj[i].images[0]);
    temp = temp.replace('__PRODUCT__LINK__', `/product?id=${i}`);
    temp = temp.replace('__DISCOUNT__PERCENTAGE__', dataObj[i].discountPercentage);
    temp = temp.replace('__STOCK__INFO__', (dataObj[i].stock > 0)?'':'Out-of-Stock');
    temp = temp.replace('__PRICE__', dataObj[i].price);
    temp = temp.replace('__DESCRIPTION__', dataObj[i].description);
    result.push(temp);
}
result = result.join(' ');
const homePage = homeTemplate.replace('__PRODUCTS__CARD__', result);

const server = http.createServer((req, res)=>{
    console.log('Request Received...');
    // const route = req.url;
    
    // const path = url.parse(req.url);
    // const pathname = path.pathname;
    res.writeHead(200, 
        {
            'content-type': 'text/html'
        }
    );
    // 'true' is for query to be parsed as an object
    const {pathname, query} = url.parse(req.url, true); // de-structuring 
    // console.log(pathname)
    // console.log(query);
    if (pathname === '/home') {
        res.end(homePage);
    } 
    else if (pathname === '/product') {
        const id = query.id;
        const productName = query.productName;
        let productPage = homeTemplate.replace('__PRODUCTS__CARD__', '__PRODUCT__DATA__');
        let productTemplate = `
            <div class='product-card'>
                <img src="__IMAGE__" />
                <div>
                    <h3>__TITLE__</h3>
                    <p>__DESCRIPTION__</p>
                    <br>
                    <p class="deal-offer"><span>__DISCOUNT__PERCENTAGE__% off</span> Limited time offer</p>
                    <br>
                    <h4>$__PRICE__/-</h4>
                    <button style="margin: 8px auto; color: white; background-color:orange; border:none; padding: 16px; border-radius: 8px;" >Order Now</button>
                    <button style="margin: 8px auto; color: white; background-color:gray; border:none; padding: 16px; border-radius: 8px;" >Add to Cart</button>
                </div>
            </div>
            `
        if (id) 
        {
            const productData = dataObj[id];
            productTemplate = productTemplate.replace('__TITLE__', productData.title).replace('__IMAGE__', productData.images[0]).replace('__DESCRIPTION__', productData.description).replace('__PRICE__', productData.price).replace('__DISCOUNT__PERCENTAGE__', productData.discountPercentage);
        } 
        else if (productName) {
            console.log(productName);
            let resItems = [] // resultant list of all matching items
            let result = dataObj.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()));
            console.log(result);
            const productsData = result;
            productsData.forEach((item)=>{
                console.log('ITEM', item);
                resItems.push(productTemplate.replace('__TITLE__', item.title)
                .replace('__IMAGE__', item.images[0])
                .replace('__DESCRIPTION__', item.description)
                .replace('__PRICE__', item.price)
                .replace('__DISCOUNT__PERCENTAGE__', item.discountPercentage));                                
            });
            resItems = resItems.join(' ');
            productTemplate = resItems;
        }
        else {
            res.end('404... Page Not Found!!');
        }
        productPage = productPage.replace('__PRODUCT__DATA__', productTemplate);
        res.end(productPage);
    } 
    else if (pathname === '/about') {
        res.end("My name is Meenakshi");
    }
    else if (pathname === '/contact'){
        const contactPage = `
        
        `
        res.end("Send mail at workbymeenakshi@gmail.com");
    }
    else {
        res.end('404... Page Not Found!!');
    }
})

const HOST = 'localhost'
const PORT = 5500;
server.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
});
