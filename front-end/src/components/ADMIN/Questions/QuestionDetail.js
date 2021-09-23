import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAnswer,
  getAllQuestions,
  questionState,
  removeAnswer,
} from "../../../features/questions/questionSlice";
import {
  selectState,
  setQuestionModal,
} from "../../../features/thema/themaSlice";

const QuestionDetail = () => {
  const { questionDetail, questionDetailModal, questionID } =
    useSelector(selectState);

  const [addNew, setaddNew] = useState([]);
  const { questions } = useSelector(questionState);
  const dispatch = useDispatch();
  console.log(questionDetail);
  return (
    <div
      className={questionDetailModal ? "detail-wraper show" : "detail-wraper"}
    >
      <i
        onClick={() => dispatch(setQuestionModal())}
        className="close-circle fas fa-times-circle"
      ></i>
      <i
        onClick={() => {
          setaddNew([
            ...addNew,
            {
              question: questions[questionID]._id,
              text: "",
              days: "",
              cost: "",
            },
          ]);
        }}
        className="add fas fa-plus"
      ></i>

      {addNew.map((neww, index) => (
        <div className="detail-item">
          <div>
            <textarea
              type="text"
              name="text"
              rows="6"
              onChange={(e) => {
                addNew[index].text = e.target.value;
                setaddNew(addNew);
              }}
            />
          </div>
          <div>
            <span>Days : </span>
            <input
              type="number"
              name="days"
              onChange={(e) => {
                addNew[index].days = e.target.value;
                setaddNew(addNew);
              }}
            />
          </div>
          <div>
            <span>Cost : </span>
            <input
              type="number"
              name="cost"
              onChange={(e) => {
                addNew[index].cost = e.target.value;
                setaddNew(addNew);
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(
                  addNewAnswer({ info: addNew[index], index: questionID })
                )
                  .then(unwrapResult)
                  .then((data) => {
                    if (data.answer) {
                      let temp = addNew.filter((f, i) => i !== index);
                      setaddNew(temp);
                    }
                  });
                dispatch(getAllQuestions());
              }}
            >
              Kaydet
            </button>
          </div>
        </div>
      ))}

      {questions[questionID] &&
        questions[questionID].answers.map((answer, index) => (
          <div className="detail-item">
            <div>
              <textarea
                type="text"
                name="text"
                defaultValue={answer.text}
                rows="6"
              />
            </div>
            <div>
              <span>Days : </span>
              <input type="number" name="days" defaultValue={answer.days} />
            </div>
            <div>
              <span>Cost : </span>
              <input type="number" name="cost" defaultValue={answer.cost} />
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch(
                    removeAnswer({
                      id: answer._id,
                      qindex: questionID,
                      aindex: index,
                    })
                  )
                }
              >
                Sil
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default QuestionDetail;
