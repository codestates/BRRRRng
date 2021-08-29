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

const userRouter = express.Router();

userRouter.get("/:id/info", getInfo);
userRouter.delete("/:id/delete/", delUser);
userRouter.put("/:id/edit/", putEdit);
userRouter.put("/:id/address", putAddress);
userRouter.delete("/:id/address", delAddress);
userRouter.put("/:id/mycar/", putMycar);
userRouter.delete("/:id/mycar/", delMycar);

module.exports = userRouter;
