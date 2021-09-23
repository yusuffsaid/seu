import React, { useEffect, useState } from "react";
import "./categories.css";
import {
  categoryState,
  createCategory,
  deleteCategory,
  getAllCategory,
} from "../../../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllQuestions,
  questionState,
} from "../../../features/questions/questionSlice";

const Categories = () => {
  const [info, setInfo] = useState({ name: "", icon: "" });
  const { categories } = useSelector(categoryState);
  const { questions } = useSelector(questionState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllQuestions());
  }, []);
  return (
    <div>
      <div className="card-container">
        {categories.map((categori, index) => (
          <div className="card-item" key={index}>
            <header className="card-header">
              <h1>
                {categori.name} <i className={categori.icon}></i>
              </h1>
            </header>
            <div className="card-body">
              {questions
                .filter((f) => f.category._id === categori._id)
                .map((m, index) => (
                  <div key={index} className="card-answer">
                    {m.name}
                  </div>
                ))}
            </div>
            <footer className="card-footer">
              <button
                onClick={() =>
                  dispatch(deleteCategory({ id: categori._id, index: index }))
                }
              >
                Sil
              </button>
            </footer>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          dispatch(createCategory(info));
        }}
      >
        <input
          type="text"
          placeholder="Kategori adı giriniz."
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Kategori iconu giriniz."
          onChange={(e) => setInfo({ ...info, icon: e.target.value })}
        />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Categories;
