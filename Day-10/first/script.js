// IMPORTS
const express = require("express");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

// INITIALISE
const app = express();

// MIDDLEWARE
app.use(express.json()); // bodyParser middleware

// ROUTER HANDLING
// routers assigned to particular routes middleware
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// LISTEN
const PORT = 5500;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});
