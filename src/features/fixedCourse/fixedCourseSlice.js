import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  fixedCourseList: [],
};

const fixedCourseSlice = createSlice({
  name: 'fixedCourse',
  initialState,
  reducers: {
    fetchFixedCourse(state, action) {
      state.loading = true;
    },
    fetchFixedCourseSuccess(state, action) {
      state.loading = false;
      state.fixedCourseList = action.payload.courses;
    },
    fetchFixedCourseFailed(state, action) {
      state.loading = false;
    },
  },
});

//action
export const fixedCourseActions = fixedCourseSlice.actions;
//selector
export const selectFixedCourseLoading = (state) => state.fixedCourse.loading;
export const selectFixedCourseList = (state) => state.fixedCourse.fixedCourseList;
//reducer
const fixedCourseReducer = fixedCourseSlice.reducer;
export default fixedCourseReducer;
