const express = require("express");
const { chargeApi } = require("../controllers/chargeController");

const chargeRouter = express.Router();

chargeRouter.post("/search", chargeApi);

module.exports = chargeRouter;
