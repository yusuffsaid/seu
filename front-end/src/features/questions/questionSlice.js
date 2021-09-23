import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  questions: [],
};

export const getCategoryQuestion = createAsyncThunk(
  "question/getcategory",
  async (id) => {
    const questions = await axios.get(`/api/question/all/${id}`);
    return questions.data.questions;
  }
);

export const getAllQuestions = createAsyncThunk("question/getall", async () => {
  const questions = await axios.get("/api/question/all");

  return questions.data.questions;
});

export const updateAnswer = createAsyncThunk(
  "question/updateanswer",
  async (id, info, qindex, aindex) => {
    const answer = await axios.post("/api/answer/update/" + id, info);
    return { data: answer.data.answer, qindex, aindex };
  }
);

export const removeAnswer = createAsyncThunk(
  "question/removeAnser",
  async ({ id, qindex, aindex }) => {
    await axios.delete("/api/answer/delete/" + id);
    console.log(qindex, aindex);
    return { qindex: qindex, aindex: aindex };
  }
);

export const createQuestion = createAsyncThunk(
  "question/create",
  async (info) => {
    const question = await axios.post("/api/question/create", info);
    return question.data.question;
  }
);

export const addNewAnswer = createAsyncThunk(
  "question/newAnwer",
  async ({ info, index }) => {
    const answer = await axios.post("/api/question/addanswer", info);
    return { answer: answer.data.answer, qindex: index };
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    deleteQuestion: (state, action) => {
      state.questions.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [getCategoryQuestion.fulfilled]: (state, action) => {
      state.questions = action.payload;
    },
    [getAllQuestions.fulfilled]: (state, action) => {
      state.questions = action.payload;
    },
    [updateAnswer.fulfilled]: (state, action) => {
      state.questions[action.payload.qindex].answers[action.payload.aindex] =
        action.payload.data;
    },
    [removeAnswer.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.questions[action.payload.qindex].answers.splice(
        action.payload.aindex,
        1
      );
    },
    [createQuestion.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.questions.push(action.payload);
    },
    [addNewAnswer.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.questions[action.payload.qindex].answers.push(
        action.payload.answer
      );
    },
  },
});

export const { deleteQuestion } = questionSlice.actions;

export const questionState = (state) => state.question;

export default questionSlice.reducer;
