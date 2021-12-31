import { createSlice } from '@reduxjs/toolkit';

import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  tutorList: [],
  tutorDetail: {},
  filter: {
    search: '',
    _sortBy: '',
    _page: 1,
    _limit: 10,
  },
};

const tutorsSlice = createSlice({
  name: 'tutors',
  initialState,
  reducers: {
    refreshState(state, action) {
      state = initialState;
    },
    // get data
    fetchTutorList(state, action) {
      state.loading = true;
    },
    fetchTutorsSuccess(state, action) {
      state.loading = false;
      state.tutorList = action.payload;
    },
    fetchTutorFailed(state, action) {
      state.loading = false;
    },

    // get tutor detail
    fetchDetailTutor(state, action) {
      state.loading = true;
    },
    fetchDetailSuccess(state, action) {
      state.loading = false;
      state.tutorDetail = action.payload;
    },
    fetchDetailFailed(state, action) {
      state.loading = false;
    },

    // delete tutor
    deleteTutor(state, action) {
      state.loading = true;
    },
    deleteTutorSuccess(state, action) {
      state.loading = false;
    },
    deleteTutorFailed(state, action) {
      state.loading = false;
    },

    //pagination tutor
    setFilterTutor(state, action) {
      state.filter = action.payload;
    },

    // search tutor
    setSearchTutor(state, action) {
      state.filter.search = action.payload;
    },

    // handle filter list
    fetchFilterBy(state, action) {
      state.loading = true;
    },
    fetchFilterBySuccess(state, action) {
      state.loading = false;
      state.tutorList = action.payload.tutorList;
    },
    fetchFilterByFailed(state, action) {
      state.loading = false;
    },
  },
});

// action
export const tutorActions = tutorsSlice.actions;
// selector
export const selectLoadingTutors = (state) => state.tutors.loading;
export const selectListTutors = (state) => state.tutors.tutorList;
export const selectTutorDetail = (state) => state.tutors.tutorDetail;
export const selectTutorFilter = (state) => state.tutors.filter;
export const selectTutorSearch = (state) => state.tutors.filter.search;

export const selectListRemaining = createSelector(selectListTutors, selectTutorSearch, (listTutors, searchText) => {
  //search all
  // return listTutors.filter((tutor) => Object.values(tutor).join(' ').toLowerCase().includes(searchText.toLowerCase()));

  // search by name
  return listTutors.filter((tutor) => tutor.name.toLowerCase().includes(searchText.toLowerCase()));
});

const tutorReducer = tutorsSlice.reducer;
export default tutorReducer;
