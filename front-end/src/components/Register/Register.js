import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authState, registerUser } from "../../features/auth/authSlice";
import {
  selectState,
  setLoginModal,
  setRegisterModel,
} from "../../features/thema/themaSlice";
import "./register.css";

const Register = () => {
  const state = useSelector(selectState);
  const auth = useSelector(authState);
  const dispatch = useDispatch();
  const [information, setInformation] = useState({});
  const changeInformation = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(information));
  };
  return (
    <div
      className={`${
        state.registerModal && !auth.user ? "register show" : "register"
      }`}
    >
      <i
        onClick={() => dispatch(setRegisterModel())}
        className="clos-btn far fa-times-circle"
      ></i>
      <form onSubmit={(e) => submitHandler(e)} className="register-form">
        <input
          name="name"
          type="text"
          placeholder="Lütfen adınızı giriniz."
          required
          onChange={(e) => changeInformation(e)}
        />
        <input
          name="email"
          type="email"
          placeholder="Lütfen e-posta adresinizi giriniz."
          required
          onChange={(e) => changeInformation(e)}
        />
        <input
          name="contact.country"
          type="text"
          placeholder="Lütfen ülkenizi giriniz."
          required
          onChange={(e) => changeInformation(e)}
        />
        <input
          name="contact.city"
          type="text"
          placeholder="Lütfen şehrinizi giriniz."
          required
          onChange={(e) => changeInformation(e)}
        />
        <div style={{ display: "flex" }}>
          <input
            name="contact.number"
            type="text"
            placeholder="Kapı No."
            required
            onChange={(e) => changeInformation(e)}
          />
          <input
            name="contact.tel"
            type="text"
            placeholder="Tel."
            required
            onChange={(e) => changeInformation(e)}
          />
        </div>
        <input
          name="company.name"
          type="text"
          placeholder="Compony Name"
          required
          onChange={(e) => changeInformation(e)}
        />
        <div style={{ display: "flex" }}>
          <input
            name="company.tel"
            type="text"
            placeholder="Compony Tel."
            required
            onChange={(e) => changeInformation(e)}
          />
          <input
            name="company.email"
            type="text"
            placeholder="Compony Email."
            required
            onChange={(e) => changeInformation(e)}
          />
        </div>
        <input
          name="password"
          type="password"
          placeholder="Lütfen bir şifre belirletiyiniz."
          required
          minLength="7"
          onChange={(e) => changeInformation(e)}
        />

        <button>Kayıt Ol</button>
        <span
          onClick={() => {
            dispatch(setRegisterModel());
            dispatch(setLoginModal());
          }}
        >
          Zaten Bir Hesabın Varmı
        </span>
      </form>
    </div>
  );
};

export default Register;
