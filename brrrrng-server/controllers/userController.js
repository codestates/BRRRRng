const { User } = require("../models/User");
const { Car } = require("../models/Car");

const getInfo = async (req, res) => {
  console.log("get Info");
  const { _id } = req.body;
  const userInfo = await User.findById({ _id });
  if (!userInfo) {
    return res
      .status(400)
      .json({ success: false, message: "failed to user info" });
  }
  return res.status(200).json({ userInfo: userInfo, success: true });
};

const delUser = async (req, res) => {
  const { _id } = req.body;
  const deleteUser = await User.findByIdAndDelete({ _id });
  if (!deleteUser) {
    return res.status(400).json({
      success: false,
      message: "failed to user deleted",
    });
  }
  return res.status(200).json({
    success: true,
    message: "user is deleted successfully",
  });
};

const putEdit = async (req, res) => {
  const {
    body: { username, password, _id },
  } = req;
  const editUser = await User.findByIdAndUpdate(
    { _id },
    {
      username,
      password,
    },
    {
      new: true,
    },
  );
  if (!editUser) {
    return res.status(400).json({
      success: false,
      message: "failed to edit",
    });
  }
  return res.status(200).json({
    success: true,
    message: "edited successfully",
  });
};

const putAddress = async (req, res) => {
  const {
    body: { address, _id },
  } = req;
  const putAddr = await User.findByIdAndUpdate(
    { _id },
    {
      $push: {
        address,
      },
    },
    {
      new: true,
    },
  );
  if (!putAddr) {
    return res.status(400).json({
      success: false,
      message: "failed to add address",
    });
  }
  return res.status(200).json({
    success: true,
    message: "added to address successfully",
  });
};

const delAddress = async (req, res) => {
  const {
    body: { address, _id },
  } = req;
  const delAddr = await User.findByIdAndUpdate(
    { _id },
    {
      $pull: {
        address: address,
      },
    },
    {
      new: true,
    },
  );
  if (!delAddr) {
    return res.status(400).json({
      success: false,
      message: "failed to address deleted",
    });
  }
  return res.status(200).json({
    success: true,
    message: "address is deleted successfully",
  });
};

const putMycar = async (req, res) => {
  const {
    body: { carid, _id },
  } = req;
  const getCarInfo = await Car.findOne({
    carid,
  });
  const putCar = await User.findByIdAndUpdate(
    { _id },
    {
      $push: {
        // carid,
        carinfo: getCarInfo,
      },
    },
    {
      new: true,
    },
  );
  if (!putCar) {
    return res.status(400).json({
      success: false,
      message: "failed",
    });
  }
  return res.status(200).json({
    success: true,
    message: "success",
  });
};

const delMycar = async (req, res) => {
  const {
    body: { carid, _id },
  } = req;
  const delCar = await User.findByIdAndUpdate(
    { _id },
    {
      $pull: {
        carinfo: { carid },
      },
    },
    {
      new: true,
    },
  );
  if (!delCar) {
    return res.status(400).json({
      success: false,
      message: "failed",
    });
  }
  return res.status(200).json({
    success: true,
    message: "success",
  });
};

module.exports = {
  getInfo,
  delUser,
  putEdit,
  putAddress,
  delAddress,
  putMycar,
  delMycar,
};
