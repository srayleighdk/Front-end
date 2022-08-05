import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic(state, action) {
            state.topics[action.payload.id] = {...action.payload, quizIds: []} ;
        },
        addQuizId(state, action) {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);  
        }
    }
})

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;