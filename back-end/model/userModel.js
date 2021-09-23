const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const crypto = require("crypto");

const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Lütfen isminizi giriniz!"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Lütfen geçerli bir email adresi giriniz",
    ],
  },
  contact: {
    country: { type: String },
    city: { type: String },
    number: { type: String },
    tel: { type: Number },
  },
  company: {
    name: String,
    tel: Number,
    email: String,
  },
  password: {
    type: String,
    minLenght: [6, "Lütfen geçerli bir şifre adresi giriniz"],
    required: [true, "Lütfen geçerli bir şifre adresi giriniz"],
    select: false,
  },
  createdAdd: {
    type: Date,
    default: Date.now,
  },
  profil_img: {
    type: String,
    default: "default.png",
  },
  role: {
    type: String,
    default: "user",
  },
  bloct: {
    type: Boolean,
    default: false,
  },
  request: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Request",
    },
  ],
});

userSchema.methods.createJWTFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
  const payload = {
    id: this.id,
    name: this.name,
    request: this.request,
    email: this.email,
    profil_img: this.profil_img,
    role: this.role,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  return token;
};

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next();

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next();

      this.password = hash;

      next();
    });
  });
});

module.exports = mongoose.model("User", userSchema);
