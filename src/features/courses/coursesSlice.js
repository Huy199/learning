import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  filter: {
    _key: '',
    _limit: 10,
    _page: 1,
    _sortBy: '',
  },
  courseList: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchListCourse(state, action) {
      state.loading = true;
    },
    fetchCourseSuccess(state, action) {
      state.loading = false;
      state.courseList = action.payload;
    },
    fetchCourseFailed(state, action) {
      state.loading = false;
    },

    // filter
    setFilterCourse(state, action) {
      state.filter = action.payload;
    },

    // search
    fetchSearchCourse(state, action) {
      state.loading = true;
    },
    fetchSearchSuccess(state, action) {
      state.courseList = action.payload.courseList;
      state.loading = false;
    },
    fetchSearchFailed(state, action) {
      state.loading = false;
    },

    // handle filter list
    fetchFilterBy(state, action) {
      state.loading = true;
    },
    fetchFilterBySuccess(state, action) {
      state.loading = false;
      state.courseList = action.payload.courseList;
    },
    fetchFilterByFailed(state, action) {
      state.loading = false;
    },
  },
});

// action
export const courseActions = courseSlice.actions;
// select
export const selectLoadingCourse = (state) => state.courses.loading;
export const selectListCourse = (state) => state.courses.courseList;
export const selectFilterCourse = (state) => state.courses.filter;
// reducer
const courseReducer = courseSlice.reducer;
export default courseReducer;
