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

userRouter.get("/:id/info", auth, getInfo);
userRouter.delete("/:id/delete/", auth, delUser);
userRouter.put("/:id/edit/", auth, putEdit);
userRouter.put("/:id/address", auth, putAddress);
userRouter.delete("/:id/address", auth, delAddress);
userRouter.put("/:id/mycar/", auth, putMycar);
userRouter.delete("/:id/mycar/", auth, delMycar);

module.exports = userRouter;
