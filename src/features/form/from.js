import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  component: 'FORM_FIRST_STEP',
  loading: false,
  formDataFirstStep: {},
  formDataSecondStep: {},
  formDataThirdStep: {},
};
const formSlice = createSlice({
  name: 'formCreate',
  initialState,
  reducers: {
    changeStepAndComponent(state, action) {
      state.step = action.payload.step;
      state.component = action.payload.component;
    },
    changeComponent(state, action) {
      state.component = action.payload;
    },
    resetFormData: () => initialState,
  },
});

export const formCreateAction = formSlice.actions;

export const selectFormCreateStep = (state) => state.formCreate.step;
export const selectFormCreateComponent = (state) => state.formCreate.component;

const formCreateReducer = formSlice.reducer;
export default formCreateReducer;
