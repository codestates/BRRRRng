const config = require("../config/key");
const jwt = require("jsonwebtoken");

const genAccessToken = (userData) =>
  jwt.sign(userData, config.accessSecret, {
    expiresIn: "2m",
  });

const genRefreshToken = (userData) =>
  jwt.sign(userData, config.refreshSecret, {
    expiresIn: "5m",
  });

module.exports = { genAccessToken, genRefreshToken };
