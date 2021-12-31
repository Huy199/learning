import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  loading: false,
  studentList: [],
  filter: {
    _key: '',
    _limit: 10,
    _page: 1,
    _sortBy: '',
  },
  studentDetail: {},
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    //get all students
    fetchStudentList(state, action) {
      state.loading = true;
    },
    fetchStudentSuccess(state, action) {
      state.loading = false;
      state.studentList = action.payload;
    },
    fetchStudentFailed(state, action) {
      state.loading = false;
    },

    //get detail students by id
    fetchDetailStudent(state, action) {
      state.loading = true;
    },
    fetchDetailStudentSuccess(state, action) {
      state.loading = false;
      state.studentDetail = action.payload;
    },
    fetchDetailStudentFailed(state, action) {
      state.loading = false;
    },
    refreshDetailStudent(state, action) {
      state.studentDetail = {};
    },

    //delete students by id
    deleteStudent(state, action) {
      state.loading = true;
    },
    deleteStudentSuccess(state, action) {
      state.loading = false;
      state.studentList.filter((student) => student.id !== action.payload);
    },
    deleteStudentFailed(state, action) {
      state.loading = false;
    },

    // search
    fetchSearchStudent(state, action) {
      state.loading = true;
    },
    fetchSearchSuccess(state, action) {
      state.loading = false;
      state.studentList = action.payload.studentList;
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
      state.studentList = action.payload.studentList;
    },
    fetchFilterByFailed(state, action) {
      state.loading = false;
    },

    // setFilter
    setFilterStudent(state, action) {
      state.filter = action.payload;
    },
  },
});

//actions
export const studentsActions = studentsSlice.actions;

// selectors
export const selectorStudentLoading = (state) => state.students.loading;
export const selectorStudentList = (state) => state.students.studentList;
export const selectorStudentDetail = (state) => state.students.studentDetail;
export const selectFilterStudent = (state) => state.students.filter;
export default studentsSlice.reducer;
