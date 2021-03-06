const config = require("../config/key");
const jwt = require("jsonwebtoken");

const genAccessToken = (userData) =>
  jwt.sign(userData, config.accessSecret, {
    expiresIn: "30m",
  });

const genRefreshToken = (userData) =>
  jwt.sign(userData, config.refreshSecret, {
    expiresIn: "1h",
  });

module.exports = { genAccessToken, genRefreshToken };
