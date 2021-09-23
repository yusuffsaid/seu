import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authState, logoutUser } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import {
  setLoginModal,
  setRegisterModel,
} from "../../features/thema/themaSlice";
import "./nav.css";
const Nav = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  return (
    <nav>
      <div className="logo">SUAD E UMAR</div>

      <ul>
        {!auth.user ? (
          <>
            <li>
              <a onClick={() => dispatch(setRegisterModel())} href="##">
                REGISTER
              </a>
            </li>
            <li>
              <a onClick={() => dispatch(setLoginModal())} href="#login">
                LOGIN
              </a>
            </li>
          </>
        ) : (
          <>
            {auth.user.role === "admin" ? (
              <li>
                <Link to="/admin">ADMİN</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/profile">PROFİL</Link>
                </li>
                <li>
                  <Link to="/aplication">BAŞVURU YAP</Link>
                </li>
              </>
            )}

            <li>
              <a
                onClick={() => dispatch(logoutUser())}
                style={{ color: "red" }}
                href="#login"
              >
                ÇIKIŞ YAP
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
