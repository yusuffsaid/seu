import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectState,
  setRequest,
  setRequestModal,
} from "../../../features/thema/themaSlice";

const RequestDetail = () => {
  const dispatch = useDispatch();
  const { request_answer_modal, request_answer_index, request_answers } =
    useSelector(selectState);
  return (
    <div
      className={request_answer_modal ? "detail-wraper show" : "detail-wraper"}
    >
      <i
        onClick={() => dispatch(setRequestModal())}
        className="close-circle fas fa-times-circle"
      ></i>

      {request_answers.map((answer, index) => (
        <div className="card-container">
          <div className="card-item">
            <header
              className="card-header"
              style={{ fontSize: "14px", textAlign: "center" }}
            >
              {answer.text}
            </header>
            <div className="card-body">
              <span>
                <strong>Days</strong>:{answer.days}
              </span>
              <span>
                <strong>Cost</strong>:{answer.cost}
              </span>
            </div>
            <footer className="card-footer"></footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestDetail;
