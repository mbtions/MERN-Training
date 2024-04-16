const express = require('express');
const fs = require('fs'); // sync
// const fs = require('fs/promises')

const app = express()

app.get('/api/products', (req, res)=>{
    const data = fs.readFile('./data.json', {encoding: 'utf8'})
    const obj = JSON.parse(data);
    // res.send(obj);
    res.json(obj);
});

const PORT = 5500
const HOST = 'localhost'
app.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
})