import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  flexibleLessonList: [],
};

const flexibleLessonSlice = createSlice({
  name: 'flexibleLesson',
  initialState,
  reducers: {
    fetchFlexibleLesson(state, action) {
      state.loading = true;
    },
    fetchFlexibleLessonSuccess(state, action) {
      state.loading = false;
      state.flexibleLessonList = action.payload;
    },
    fetchFlexibleLessonFailed(state, action) {
      state.loading = false;
    },
  },
});

//action
export const flexibleLessonActions = flexibleLessonSlice.actions;
//selector
export const selectFlexibleLessonLoading = (state) => state.flexibleLesson.loading;
export const selectFlexibleLessonList = (state) => state.flexibleLesson.flexibleLessonList;
//reducer
const flexibleLessonReducer = flexibleLessonSlice.reducer;
export default flexibleLessonReducer;
