const express = require("express");
const userHandler = require("../controllers/user");

const { registerValidation } = require("../utils/utils");

exports.router = (() => {
  const userRouter = express.Router();
  
  userRouter.get("/", userHandler.getUsers);


  userRouter.get("/:id", userHandler.getUserById);

  //POST
  // register new user
  //http://localhost:5000/api/user/register
  userRouter.post("/register", registerValidation, userHandler.postUser);


  

  userRouter.delete("/user", userHandler.delUserById);
  
  userRouter.put("/user", userHandler.putUserById);


  userRouter.get("/user/:username", userHandler.getUserByUsername);
  
  userRouter.post("/user/avatar", userHandler.postAvatar);

  return userRouter;
})();
