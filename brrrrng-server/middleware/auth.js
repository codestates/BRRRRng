const { User } = require("../models/User");
const config = require("../config/key");
const jwt = require("jsonwebtoken");
const { genAccessToken } = require("../utils/tokenGenerator");

const auth = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    const accessDecoded = jwt.verify(accessToken, config.accessSecret);
    //토큰이 유효하면 pass
    if (accessDecoded) {
      req.cookies.accessToken = accessToken;
      req.body._id = userData._id;
      return next();
    }
  } catch (error) {
    try {
      //토큰이 유효하지 않으면 refreshToken으로 accessToken 재발급
      const refreshToken = req.cookies.refreshToken;
      const refreshDecoded = jwt.verify(refreshToken, config.refreshSecret);

      if (refreshDecoded) {
        const user = await User.findById({ _id: refreshDecoded._id });

        if (user.refreshToken === refreshToken) {
          //토큰재발급
          const userData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            carid: user.carid,
            address: user.address,
          };

          req.accessToken = genAccessToken(userData);
          req.body._id = userData._id;
          return next();
        }
      }
    } catch (error) {
      //둘다 만료됨
      res.status(400).json({
        isAuth: false,
        message: "Every Token expired",
        err: error,
      });
    }
  }
};

module.exports = { auth };
