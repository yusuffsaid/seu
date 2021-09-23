import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectState,
  setLoginModal,
  setRegisterModel,
} from "../../features/thema/themaSlice";
import { authState, loginUser } from "../../features/auth/authSlice";

const Login = () => {
  const state = useSelector(selectState);
  const auth = useSelector(authState);
  const dispatch = useDispatch();
  const [information, setInformation] = useState({});
  const changeInformation = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(information));
  };
  return (
    <div
      className={`${state.loginModal && !auth.user ? "login show" : "login"}`}
    >
      <i
        onClick={() => dispatch(setLoginModal())}
        className="clos-btn far fa-times-circle"
      ></i>
      <form onSubmit={(e) => submitHandler(e)} className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Lütfen e-posta adresinizi giriniz."
          required
          onChange={(e) => changeInformation(e)}
        />
        <input
          name="password"
          type="password"
          placeholder="Lütfen şifrenizi giriniz."
          required
          minLength="7"
          onChange={(e) => changeInformation(e)}
        />

        <button>Giriş Yap</button>
        <span
          onClick={() => {
            dispatch(setLoginModal());
            dispatch(setRegisterModel());
          }}
        >
          Hesabın yokmu hemen kaydol.
        </span>
      </form>
    </div>
  );
};

export default Login;
