import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, authState } from "../../../features/auth/authSlice";
import "./user.css";
const User = () => {
  const dispatch = useDispatch();
  const { allUser } = useSelector(authState);
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    dispatch(allUsers());
  }, []);
  useEffect(() => {
    document.addEventListener("click", clickControl);
    return () => {
      document.removeEventListener("click", clickControl);
    };
  }, [modal]);

  const clickControl = (e) => {
    if (modal) {
      if (e.target.nodeName !== "TD" || "TR" || "TABLE") setmodal(false);
    }
  };
  return (
    <div className="card-container user">
      {allUser.map((user, index) => (
        <div className="card-item">
          <header className="card-header">
            <h1 style={{ fontSize: "18px" }}> {user.name}</h1>
          </header>
          <div className="card-body">
            <span>
              <strong>Email</strong>:{user.email}
            </span>
            <span>
              <strong>Role</strong>:{user.role}
            </span>
            <span>
              <strong>Company</strong>:{user.company.name}
            </span>
            <span>
              <strong>Number</strong>:{user.contact.tel}
            </span>
          </div>
          <footer className="card-footer">
            <button
              onClick={() => {
                setmodal(true);
              }}
            >
              Detaylar
            </button>
            <button>Status</button>
          </footer>
          <div className={`${modal ? "user-modal show" : "user-modal"}`}>
            <table className="table">
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{user.contact.country}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{user.contact.city}</td>
              </tr>
              <tr>
                <td>Tel</td>
                <td>{user.contact.tel}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>{user.company.name}</td>
              </tr>
              <tr>
                <td>Company Tel</td>
                <td>{user.company.tel}</td>
              </tr>
              <tr>
                <td>Company Email</td>
                <td>{user.company.email}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>{user.role}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
