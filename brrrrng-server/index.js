import { connect } from "mongoose";
import express from "express";
import { mongoURI } from "./config/key";
import userRouter from "./routers/userRouter";
const app = express();
const port = 80;

connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
