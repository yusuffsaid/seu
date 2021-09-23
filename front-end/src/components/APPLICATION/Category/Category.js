import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  categoryState,
  getAllCategory,
} from "../../../features/category/categorySlice";
import "./category.css";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const categoriesState = useSelector(categoryState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory())
      .then(unwrapResult)
      .then((data) => {
        console.log(data);
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div className="category">
      <div className="category-list">
        {categories.map((m, i) => {
          return (
            <Link key={m._id} to={`/aplication/${m._id}`} className="item">
              <i class={m.icon}></i>
              <h1>{m.name}</h1>
            </Link>
          );
        })}

        {/* <div className="item">
          <i class="fab fa-vuejs"></i>
          <h1>Vue.JS Teknolojileri</h1>
        </div>
        <div className="item">
          <i class="fab fa-angular"></i>
          <h1>Angular Teknolojileri</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Category;
