const express = require("express");
const {
  getInfo,
  delUser,
  putEdit,
  putAddress,
  delAddress,
  putMycar,
  delMycar,
} = require("../controllers/userController");
const { auth } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.get("/info", auth, getInfo);
userRouter.delete("/delete", auth, delUser);
userRouter.put("/edit", auth, putEdit);
userRouter.put("/address", auth, putAddress);
userRouter.delete("/address", auth, delAddress);
userRouter.put("/mycar", auth, putMycar);
userRouter.delete("/mycar", auth, delMycar);

module.exports = userRouter;
