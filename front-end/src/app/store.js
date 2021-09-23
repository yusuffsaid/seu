import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import categorySlice from "../features/category/categorySlice";
import questionSlice from "../features/questions/questionSlice";
import requestSlice from "../features/request/requestSlice";
import themaSlice from "../features/thema/themaSlice";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    thema: themaSlice,
    auth: authSlice,
    category: categorySlice,
    question: questionSlice,
    request: requestSlice,
  },
});
