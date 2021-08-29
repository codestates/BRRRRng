const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/key");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const carRouter = require("./routers/carRouter");
// const chargeRouter = require("./routers/chargeRouter");
const app = express();
const port = 80;

app.use(express.json());
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/car", carRouter);
// app.use("/charge", chargeRouter);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
