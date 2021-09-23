import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRequest,
  requestState,
  updateStatus,
} from "../../../features/request/requestSlice";
import {
  setRequest,
  setRequestModal,
} from "../../../features/thema/themaSlice";
import "./request.css";
import RequestDetail from "./RequestDetail";
const Request = () => {
  const { request } = useSelector(requestState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequest());
  }, []);
  return (
    <div>
      <div className="card-container">
        {request.map((req, index) => (
          <div className="card-item" key={index}>
            <header
              className="card-header"
              style={
                req.status === "Success"
                  ? { background: "green" }
                  : { background: "red" }
              }
            >
              <h1>{req.status}</h1>
            </header>
            <div className="card-body">
              <span>
                <strong>User</strong>: {req.user.name}
              </span>
              <span>
                <strong>Category</strong>: {req.category.name}
              </span>
              <span>
                <strong>Status</strong>: {req.status}
              </span>
              <span>
                <strong>Day</strong>: {req.days}
              </span>
              <span>
                <strong>Total</strong>: {req.cost}$
              </span>
              <span
                onClick={() => {
                  dispatch(setRequestModal());
                  dispatch(setRequest({ index: index, answers: req.answers }));
                }}
              >
                <strong>Answers</strong>: Show
              </span>
            </div>

            <footer className="card-footer">
              <button
                onClick={() => {
                  dispatch(
                    updateStatus({ id: req._id, status: "Success" })
                  ).then(() => {
                    dispatch(getAllRequest());
                  });
                }}
              >
                Tamamla
              </button>
              <button
                onClick={() => {
                  dispatch(updateStatus({ id: req._id, status: "Canceled" }));
                  dispatch(getAllRequest());
                }}
              >
                Reddet
              </button>
            </footer>
          </div>
        ))}
      </div>
      <RequestDetail></RequestDetail>
    </div>
  );
};

export default Request;
