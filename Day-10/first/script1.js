// const { getAllProducts } = require("./controllers/productController"); // De structuringconst express = require("express");
const productsController = require("./controllers/productsController");
const usersController = require("./controllers/usersController");
const fsPromises = require("fs/promises");
const express = require("express");

const app = express();
app.use(express.json()); // used to include body param in Object keys

// MIDDLEWARE
// manual Logs middleware for log file
app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  fsPromises.appendFile("./log.txt", req.url + "\t" + time + "\n");
  // this is when you send the app to the next place in order to carry the tasks
  next();
});

const productRouter = require();
const userRouter = express.Router();

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// Level Zero (No Abstraction)
// app.get("/api/products", productsController.getAllProducts);
// app.post("/api/products", productsController.addProduct);
// app.put("/api/products/:id", productsController.replaceProduct);
// app.patch("/api/products/:id", productsController.updateProduct);
// app.delete("/api/products/:id", productsController.deleteProduct);

// Since it is all repetitive to include path we use .route for the common path

// Level 1 Abstraction
// app
//   .route("/api/products")
//   .get(productsController.getAllProducts)
//   .post(productsController.addProduct);

// Level 2 Abstraction
productRouter
  .route("/") // sub routes
  .get(productsController.getAllProducts)
  .post(productsController.addProduct);

// app
//   .route("/api/products/:id")
//   .put(productsController.replaceProduct)
//   .delete(productsController.deleteProduct)
//   .patch(productsController.updateProduct);

productRouter
  .route("/:id")
  .put(productsController.replaceProduct)
  .delete(productsController.deleteProduct)
  .patch(productsController.updateProduct);

// app.get("/api/users", usersController.getAllUser);
// app.put("/api/users", usersController.replaceUser);
// app.post("/api/users", usersController.addUser);
// app.delete("/api/users", usersController.deleteUser);
// app.patch("/api/users", usersController.updateUser);

// app
//   .route("/api/users")
//   .get(usersController.getAllUser)
//   .put(usersController.replaceUser)
//   .post(usersController.addUser)
//   .delete(usersController.deleteUser)
//   .patch(usersController.updateUser);

userRouter
  .route("/")
  .get(usersController.getAllUser)
  .put(usersController.replaceUser)
  .post(usersController.addUser)
  .delete(usersController.deleteUser)
  .patch(usersController.updateUser);

const PORT = 5500;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});
