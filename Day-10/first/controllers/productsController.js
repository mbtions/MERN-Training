// To control each and every task specifically,
const fsPromises = require("fs/promises");

// GET
const getAllProducts = async (req, res) => {
  const data = await fsPromises.readFile("./data.json", "utf8");
  const arr = JSON.parse(data);

  // Structured Data to be sent
  res.json({
    status: "success",
    results: arr.length, // number of data items sent (needed for frontend)
    data: {
      // whatever data we want to send is inside data
      products: arr,
    },
  });
};

// POST
const addProduct = async (req, res) => {
  const data = req.body;

  if (!data.price || !data.title) {
    res.json({
      status: "fail",
      message: "Price or Title missing",
    });
    // return ;
  } else {
    const db = await fsPromises.readFile("./data.json", "utf8");
    const arr = JSON.parse(db);
    const len = arr.length;

    const newProduct = data; // new product

    if (len == 0) {
      newProduct.id = 1;
    } else {
      newProduct.id = arr[len - 1].id + 1;
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr)); // it stores the data on POSTMAN along with id to the JSON file dataa.json when hit SEND button for POST method

    res.json({
      status: "success",
      results: 1,
      data: {
        newProduct,
      },
    });
  }
};

// PUT
const replaceProduct = async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./dataa.json", "utf8"));
  const reqId = parseInt(req.params.id);
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
  fsPromises.writeFile("./dataa.json", JSON.stringify(newArr));

  res.json({
    status: "success",
    results: 1,
    data: {
      newProduct: data,
    },
  });
};

// PATCH
const updateProduct = async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"));
  const reqId = req.params.id;
  const changes = req.body;
  changes.id = reqId;
  let newElement;
  const newArr = arr.map((elem) => {
    if (elem.id === reqId) {
      newElement = {
        ...elem,
        ...changes,
      };
    }
  });
  // console.log(newArr);
  fsPromises.writeFile("./data.json", JSON.stringify(newArr));

  res.json({
    status: "success",
    results: 1,
    data: {
      updatedProduct: newElement,
    },
  });
};

// DELETE
const deleteProduct = async (req, res) => {
  const reqId = parseInt(req.params.id);
  const arr = JSON.parse(await fsPromises.readFile("../dataa.json", "utf8"));

  const newArr = arr.filter((elem) => {
    if (elem.id === reqId) return false;
    else return true;
  });

  fsPromises.writeFile("./dataa.json", JSON.stringify(newArr));

  res.status(204); // No Content
  res.json({
    status: "success",
    data: {
      newProduct: null,
    },
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
