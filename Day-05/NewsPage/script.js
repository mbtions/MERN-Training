// 14fd34af35fe4493b10114972dcc064b
console.log("App Started!");

// API Key
const API_KEY= "1b4d06dc3c0c49eaac9d6fc6d5da4696"

function callAPI(){ 
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=1b4d06dc3c0c49eaac9d6fc6d5da4696")
    .then((res)=>{
        // return console.log(res)
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        renderUI(data)
    });
}
// callAPI();

// this function is dependent on API data
function renderUI (data) {
    const root = document.getElementById('root');

    // got the articles from data
    const articles = data.articles;
    console.log(articles);
    
    // single article from the articles array const ar = articles[6];

    for (let i=0; i<articles.length; i++) {
        const ar = articles[i];
        const card = document.createElement('div');
        card.setAttribute('class', 'news-card');
        
        const title = document.createElement('h3');
        title.innerText = ar.title;
        card.appendChild(title);

        const author = document.createElement('h6');
        author.innerText = ar.author;
        card.appendChild(author);

        const img = document.createElement('img');
        img.src = ar.urlToImage;
        card.appendChild(img);

        // const description = document.createElement('p');
        // description.innerText = ar.description;
        // card.appendChild(description);

        root.appendChild(card);
    }    
}

callAPI();

