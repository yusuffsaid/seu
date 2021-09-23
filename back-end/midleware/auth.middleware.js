const jwt = require("jsonwebtoken");

const {
  isTokenIncluded,
  getAccesTokenFromHeader,
} = require("../helper/token.helper");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;

  if (!isTokenIncluded(req)) {
    return next(new Error("Hatalı Giriş", 401));
  }

  const token = getAccesTokenFromHeader(req);

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) return next(new Error("Buraya erişimin yok", 404));

    if (decoded.bloct == true)
      return next(new Error("Bu kullanıcı engellenmiştir", 403));

    req.user = decoded;
  });

  next();
};

const getAdminToRoute = (req, res, next) => {
  if (req.user.role != "admin") {
    return next(new CostumError("Buraya erişme yetkiniz yok", 403));
  }
  next();
};

module.exports = {
  getAccessToRoute,
  getAdminToRoute,
};
