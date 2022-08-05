import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz(state, action) {
            state.quizzes[action.id] = {...action.payload, cardIds: []}
        }
    }
})

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;