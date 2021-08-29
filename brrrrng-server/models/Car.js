const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  carname: {
    type: String,
    required: true,
  },
  carid: {
    type: String,
    unique: true,
    required: true,
  },
  maker: {
    type: String,
  },
  chargetype: {
    type: String,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = { Car };
