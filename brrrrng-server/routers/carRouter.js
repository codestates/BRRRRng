const express = require("express");
const { carSearch } = require("../controllers/carController");

const carRouter = express.Router();

// carRouter.get("/info", carInfo);
carRouter.post("/search", carSearch);

module.exports = carRouter;
