const { User } = require("../models/User");
const { genAccessToken, genRefreshToken } = require("../utils/tokenGenerator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//회원가입
const signup = async (req, res) => {
  try {
    const user = new User(req.body);
    //DB에 저장될 password 암호화
    const salt = await bcrypt.genSalt(saltRounds);

    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    await user.save();
    res.status(201).json({
      success: true,
      message: "signup successfully",
    });
  } catch (error) {
    //회원가입 실패 => 실패메세지와 에러 응답
    if (error)
      res.status(400).json({
        success: false,
        message: "failed to signup",
        err: error,
      });
  }
};

//로그인
const login = async (req, res) => {
  try {
    //1. 입력한 이메일에 해당하는 유저 찾기
    const checkUser = await User.findOne({
      email: req.body.email,
    });
    //1. 일치하는 유저가 없을경우
    if (!checkUser) {
      return res.status(400).json({
        success: false,
        message: "failed to login",
      });
    }
    //2. 일치하는 유저가 있을경우 -> password 검사
    const isMatch = await bcrypt.compare(req.body.password, checkUser.password);
    //비밀번호 불일치
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "failed to login",
      });
    }
    //비밀번호 일치 -> 유저 data로 토큰발급
    const userData = {
      _id: checkUser._id,
      username: checkUser.username,
      email: checkUser.email,
      carid: checkUser.carid,
      address: checkUser.address,
    };

    const accessToken = genAccessToken(userData);

    const refreshToken = genRefreshToken(userData);

    //유저 DB에 refreshToken 저장
    await User.findByIdAndUpdate(
      { _id: userData._id },
      {
        refreshToken: refreshToken,
      },
    );

    res.status(200).cookie("accessToken", accessToken, {
      domain: "api.brrrrng.ga",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: true,
    });
    res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        domain: "api.brrrrng.ga",
        path: "/",
        sameSite: "none",
        httpOnly: true,
        secure: true,
      })
      .json({
        userInfo: userData,
        success: true,
        message: "logged in successfully",
        accessToken: accessToken,
        isAuth: true,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "failed to login",
      err: error,
    });
  }
};

//로그아웃
const logout = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        refreshToken: null,
      },
    );
    res.clearCookie("accessToken", {
      domain: "api.brrrrng.ga",
      path: "/",
    });
    res
      .clearCookie("refreshToken", {
        domain: "api.brrrrng.ga",
        path: "/",
      })
      .json({
        success: true,
        isAuth: false,
        message: "logged out successfully",
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { signup, login, logout };
