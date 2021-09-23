import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerModal: false,
  loginModal: false,
  questionDetail: [],
  questionDetailModal: false,
  questionID: 0,
  request_answer_modal: false,
  request_answer_index: 0,
  request_answers: [],
};

export const themaSlice = createSlice({
  name: "thema",
  initialState,

  reducers: {
    setRegisterModel: (state) => {
      state.loginModal = false;
      state.registerModal = !state.registerModal;
    },
    setLoginModal: (state) => {
      state.registerModal = false;
      state.loginModal = !state.loginModal;
    },
    setQuestionModal: (state, action) => {
      state.questionDetailModal = !state.questionDetailModal;
      state.questionID = action.payload;
    },
    setQquestionDetail: (state, action) => {
      console.log(action.payload);
      state.questionDetail = action.payload;
    },
    setRequestModal: (state) => {
      state.request_answer_modal = !state.request_answer_modal;
    },
    setRequest: (state, action) => {
      state.request_answer_index = action.payload.index;
      state.request_answers = action.payload.answers;
    },
  },
});

export const {
  setRegisterModel,
  setLoginModal,
  setQuestionModal,
  setQquestionDetail,
  setRequest,
  setRequestModal,
} = themaSlice.actions;

export const selectState = (state) => state.thema;

export default themaSlice.reducer;
