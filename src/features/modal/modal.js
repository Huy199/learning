import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  component: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      state.show = true;
    },
    hideModal(state) {
      state.show = false;
    },
    changeModalContent(state, action) {
      state.component = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export const selectModalShow = (state) => state.modal.show;
export const selectModalComponent = (state) => state.modal.component;

const modalReducer = modalSlice.reducer;
export default modalReducer;
