const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const carRouter = require("./routers/carRouter");
const chargeRouter = require("./routers/chargeRouter");
const app = express();
const port = 80;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/car", carRouter);
app.use("/charge", chargeRouter);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

//기본응답
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
