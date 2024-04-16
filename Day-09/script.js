const express = require("express");
// const fs = require('fs'); // sync
const fsPromises = require("fs/promises");

const app = express();
app.use(express.json()); // used to include body param in Object keys

// get API using Synchronous API
// app.get('/api/products', (req, res)=>{
//     const data = fs.readFileSync('./data.json', 'utf8');
//     const arr = JSON.parse(data);
//     // res.json(obj); unstructured data
//     res.json({
//         status: 'success',
//         results: arr.length, // number of items sent (needed for frontend)
//         data: {
//             products: arr,
//         } // whatever data we want to send is inside data
//     })
// });

// Promises API for GET
app.get("/api/products", async (req, res) => {
  const data = await fsPromises.readFile("./data.json", "utf8");
  const arr = JSON.parse(data);
  // res.json(obj); unstructured data
  res.json({
    status: "success",
    results: arr.length, // number of items sent (needed for frontend)
    data: {
      products: arr,
    }, // whatever data we want to send is inside data
  });
});

app.post("/api/products", async (req, res) => {
  // console.log(req);
  // console.log(req.body);
  // console.log(Object.keys);
  const data = req.body; // data has body

  if (!data.price || !data.title) {
    res.json({
      status: "fail",
      message: "Price or Title missing",
    });
    // return ;
  } else {
    // database to read file from
    const db = await fsPromises.readFile("./dataa.json", "utf8");

    const arr = JSON.parse(db); // converting db to an array
    const len = arr.length;

    const newProduct = data; // new product

    if (len == 0) {
      // if array has no prior data (empty array)
      newProduct.id = 1; // adding id to this new product
    } else {
      newProduct.id = arr[len - 1].id + 1;
    }
    arr.push(newProduct); // adding this new product to the array
    // saving this new product data in the json file
    fsPromises.writeFile("./dataa.json", JSON.stringify(arr)); // it stores the data on POSTMAN along with id to the JSON file dataa.json when hit SEND button for POST method
    // res.send("Work in Progress...");

    res.json({
      status: "success",
      results: 1,
      data: {
        newProduct,
      },
    });
  }
});

app.put("/api/products/:id", async (req, res) => {
  // will tell whom to replace or update or modify
  // :id to modify the respective id data
  // http://localhost:5500/api/products/2 for id=2

  // console.log(req);
  // console.log(req.params);

  // res.send("Working in Progess...");
  const arr = JSON.parse(await fsPromises.readFile("./dataa.json", "utf8"));
  const reqId = req.params.id;
  const data = req.body;
  data.id = reqId;
  console.log(data.id);
  const newArr = arr.map((elem) => {
    if (elem.id == reqId) {
      return data;
    } else {
      return elem;
    }
  });
  console.log(newArr);
  // fsPromises.writeFile("./dataa.json", JSON.stringify(newArr));

  res.json({
    status: "success",
    results: 1,
    data: {
      newProduct: data,
    },
  });
});

app.delete("/api/products/:id", async (req, res) => {
  // splice
  const reqId = parseInt(req.params.id);
  // const data = req.body;

  const arr = JSON.parse(await fsPromises.readFile("./dataa.json", "utf8"));
  const newArr = arr.filter((elem) => {
    if (elem.id === reqId) return false;
    else return true;
  });
  console.log(newArr);

  fsPromises.writeFile("./dataa.json", JSON.stringify(newArr));
  res.status(204); // will show 'No Content' in POSTMAN
  res.json({
    status: "success",
    data: {
      newProduct: null,
    },
  });
});

const PORT = 5500;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});

// "title": "Vivo V1 Pro",
//     "description": "A vivo mobile with Pro version of V first series",
//     "price": "11550",
//     "discountPercentage": 18.76,
//     "categories": "smartphones",
//     "brand": "Vivo",
//     "rating": 4.8,
//     "id": 2
