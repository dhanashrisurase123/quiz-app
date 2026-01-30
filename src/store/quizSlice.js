import { createSlice } from "@reduxjs/toolkit";
import questions from "../data/questions";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions,
    answers: {},
    score: 0,
    submitted: false,
    timeUp: false
  },
  reducers: {
     startQuiz: (state) => {
      state.started = true;
    }, 

    selectAnswer: (state, action) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
    submitQuiz: (state) => {
      let score = 0;
      state.questions.forEach((q) => {
        if (state.answers[q.id] === q.correctAnswer) {
          score++;
        }
      });
      state.score = score;
      state.submitted = true;
    },
    // timeExpired: (state) => {
    //   state.timeUp = true;
    //   state.submitted = true;
    // }
  }
});

export const { startQuiz, selectAnswer, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;
