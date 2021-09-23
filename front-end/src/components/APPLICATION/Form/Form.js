import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import "./form.css";
import {
  getCategoryQuestion,
  questionState,
} from "../../../features/questions/questionSlice";
import { authState } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { createRequest } from "../../../features/request/requestSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Form = ({ match, history }) => {
  const dispatch = useDispatch();
  const { questions } = useSelector(questionState);
  const { user } = useSelector(authState);

  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [days, setDays] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    let id = match.params.id;
    dispatch(getCategoryQuestion(id));
  }, []);

  const prev = () => {
    if (page === 0) {
      setPage(0);
    } else {
      setPage(page - 1);
    }
    console.log(page);
  };

  const next = () => {
    if (page === questions.length - 1) {
      setPage(questions.length - 1);
    } else {
      setPage(page + 1);
    }
    console.log(answer);
  };

  if (questions.length <= 0) {
    return <div>Waiting</div>;
  }

  const onchangeHandler = (e, day, cost1) => {
    let index = answer.indexOf(e.target.value);
    console.log(index);
    if (index === -1) {
      setAnswer([...answer, e.target.value]);
      setDays(days + day);
      setCost(cost + cost1);
    } else {
      setAnswer(answer.splice(index, 1));
      setDays(days - day);
      setCost(cost - cost1);
    }
  };

  const submitHandler = () => {
    let information = {
      category: match.params.id,
      user: user.id,
      status: "waiting",
      answers: answer,
      days,
      cost,
    };
    answer.length > 0 &&
      dispatch(createRequest(information))
        .then(unwrapResult)
        .then((data) => {
          data.success && history.push("/aplication");
        });
  };

  return (
    <>
      <form className="form">
        {questions && (
          <>
            <p className="form-text" key={questions[page]._id}>
              {questions[page].name}
            </p>
            {questions[page].answers.map((answer, index) => (
              <label>
                <CreateInput
                  key={index}
                  questionId={questions[page]._id}
                  answerId={answer._id}
                  type={questions[page].isMultiple ? "checkbox" : "radio"}
                  days={answer.days}
                  cost={answer.cost}
                  changeFunction={onchangeHandler}
                />

                <span>{answer.text}</span>
              </label>
            ))}
          </>
        )}
      </form>
      <div className="button-group">
        {page === questions.length - 1 ? (
          <span onClick={() => submitHandler()}>Gönder</span>
        ) : (
          <span onClick={() => next()}>İleri</span>
        )}
      </div>
    </>
  );
};

export default withRouter(Form);

const CreateInput = ({
  questionId,
  answerId,
  type,
  changeFunction,
  days,
  cost,
}) => {
  return (
    <input
      onChange={(e) => {
        changeFunction(e, days, cost);
        console.log(e.target.checked);
      }}
      id={answerId}
      type={type}
      name={type === "radio" ? questionId : answerId}
      value={answerId}
    />
  );
};
