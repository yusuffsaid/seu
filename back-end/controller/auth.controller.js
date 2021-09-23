const asyncErrorHandler = require("express-async-handler");

const { comparePassword } = require("../helper/funtion.helper");
const { sentJwtToCookie } = require("../helper/token.helper");

const User = require("../model/userModel");

const register = asyncErrorHandler(async (req, res, next) => {
  const info = req.body;

  const user = await User.create(info);

  sentJwtToCookie(user, res);
});

const login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).select("+password");

  if (!user)
    return next(new CostumError("Böyle bir kullanıcı bulunamadı", 400));

  if (!comparePassword(password, user.password)) {
    return next(
      new CostumError(
        "Lütfen parolanınızı kontrol edip tekrar giriş yapınız",
        400
      )
    );
  }

  sentJwtToCookie(user, res);
});

const allUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.find();
  res.json({ user });
});

const getUser = asyncErrorHandler(async (req, res, next) => {
  const ID = req.body;
  const user = await User.findById(ID);

  res.json({
    status: true,
    user,
  });
});
module.exports = {
  register,
  login,
  getUser,
  allUser,
};
