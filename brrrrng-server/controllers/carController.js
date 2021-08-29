const { Car } = require("../models/Car");

const carSearch = async (req, res) => {
  const { carname } = req.body;
  const carInfo = await Car.findOne({ carname });
  if (!carInfo) {
    return res.status(400).json({
      success: false,
      message: "failed to get carinfo",
    });
  }
  return res.status(200).json({ carInfo, success: true });
};

// const carInfo = (req, res) => {
//   const { carid } = req.params;
//   const carInfo = await Car.findById({ carid: carid });
//   if (!carInfo) {
//     return res.status(400).json({
//       success: false,
//       message: "failed to get carinfo",
//     });
//   }
//   return res.status(200).json({ carInfo, success: true });
// };

module.exports = { carSearch };
