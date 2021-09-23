const bcrypt = require("bcrypt");

const comparePassword = (password, hashpasword) => {
  return bcrypt.compareSync(password, hashpasword);
};

module.exports = {
  comparePassword,
};
