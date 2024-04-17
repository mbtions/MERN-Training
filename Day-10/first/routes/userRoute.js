const express = require("express");
const usersController = require("../controllers/usersController");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(usersController.getAllUser)
  .put(usersController.replaceUser)
  .post(usersController.addUser)
  .delete(usersController.deleteUser)
  .patch(usersController.updateUser);

module.exports = userRouter;
