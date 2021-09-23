const sentJwtToCookie = (user, res) => {
  const { EXPRIRE, NODE_ENV } = process.env;

  const token = user.createJWTFromUser();

  res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now + parseInt(EXPRIRE) * 1000),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      token: token,
      user: {
        id: user.id,
        name: user.name,
        request: user.request,
        email: user.email,
        profil_img: user.profil_img,
        role: user.role,
      },
    });
};

const isTokenIncluded = (reg) => {
  return (
    reg.headers.authorization && reg.headers.authorization.startsWith("Bearer")
  );
};

const getAccesTokenFromHeader = (reg) => {
  const authorization = reg.headers.authorization;

  const accesToken = authorization.split(" ")[1];

  return accesToken;
};

module.exports = {
  sentJwtToCookie,
  isTokenIncluded,
  getAccesTokenFromHeader,
};
