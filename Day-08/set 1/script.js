const express = require('express')

const app = express();

app.get('/', function (req, res) {
    res.send('This is root page');
});
app.get('/home', function (req, res) {
    res.send('This is Home page');
    // res.send([1, 2, 3]); 
    // you can send contentt other than string as well with this express server.
});
app.get('/product', (req, res)=>{
    res.send('Welcome GET');
})
app.put('/product', (req, res)=>{
    res.send('Welcome PUT');
})
app.patch('/product', (req, res)=>{
    res.send('Welcome PATCH');
})
app.post('/product', (req, res)=>{
    res.send('Welcome POST');
})
app.delete('/product', (req, res)=>{
    res.send('Welcome DELETE');
})

const HOST = 'localhost'
const PORT = 5500
app.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
});