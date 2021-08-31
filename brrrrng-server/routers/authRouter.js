const { Router } = require("express");
const {
  signup,
  login,
  logout,
  authtest,
} = require("../controllers/authController");
const { auth } = require("../middleware/auth");

const authRouter = Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.get("/logout", auth, logout);

authRouter.get("/authtest", auth, authtest);

module.exports = authRouter;
