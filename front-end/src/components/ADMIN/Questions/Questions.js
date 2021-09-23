import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuestion,
  deleteQuestion,
  getAllQuestions,
  questionState,
} from "../../../features/questions/questionSlice";
import "./questions.css";
import axios from "axios";
import {
  setQquestionDetail,
  setQuestionModal,
} from "../../../features/thema/themaSlice";
import {
  categoryState,
  getAllCategory,
} from "../../../features/category/categorySlice";
const Questions = () => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(false);
  const [cat, setCat] = useState(false);
  const { questions } = useSelector(questionState);
  const { categories } = useSelector(categoryState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getAllCategory());
  }, []);

  return (
    <React.Fragment>
      <div class="card-container">
        {questions.map((question, index) => (
          <div class="card-item" key={index}>
            <header className="card-header">
              <h1>{question.category.name}</h1>
            </header>

            <div className="card-body">
              <p>{question.name}</p>
              {question.answers.map((answer, index) => (
                <div key={index} className="card-answer">
                  {answer.text}
                </div>
              ))}
            </div>

            <footer className="card-footer">
              <button
                className="far fa-trash-alt"
                onClick={async () => {
                  dispatch(deleteQuestion(index));
                  await axios.delete(`/api/question/${question._id}`);
                }}
              ></button>
              <button
                onClick={() => {
                  dispatch(setQquestionDetail(question.answers));
                  dispatch(setQuestionModal(index));
                }}
                className="fas fa-list"
                style={{ marginLeft: "10px" }}
              ></button>
            </footer>
          </div>
        ))}
      </div>
      <form className="new-area">
        <textarea
          required
          name="name"
          placeholder="Bir soru ekleyin"
          onChange={(e) => setName(e.target.value)}
        ></textarea>{" "}
        <select
          name="category"
          required
          placeholder="Lütfen bir kategori seçiniz"
          onChange={(e) => setCat(e.target.value)}
        >
          <option>Lütfen Kategori Seçiniz</option>
          {categories.map((category, index) => (
            <option value={category._id}>{category.name}</option>
          ))}
        </select>{" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            name="isMultiple"
            value="false"
            checked={checked}
            onChange={(e) => {
              setChecked(!checked);
            }}
          />{" "}
          <span>Çoklu seçim</span>
        </div>
        <button
          type="submit"
          onClick={() => {
            dispatch(
              createQuestion({
                name: name,
                isMultiple: checked,
                category: cat,
              })
            );
            dispatch(getAllQuestions());
          }}
          class="fas fa-plus"
        ></button>
      </form>
    </React.Fragment>
  );
};

export default Questions;
