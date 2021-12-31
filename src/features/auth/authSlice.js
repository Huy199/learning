import { createSlice } from '@reduxjs/toolkit';
import { StorageConstants } from '../../utils/enum';

const initialState = {
  loggedIn: false,
  role: null,
  token: localStorage.getItem(StorageConstants.ACCESS_TOKEN),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {},
    loginSuccess(state, action) {
      state.loggedIn = true;
      state.role = action.payload.username;
      state.token = action.payload.token;
    },
    loginFailed(state, action) {
      state.loggedIn = false;
    },
    logout(state, action) {},
    logoutSuccess(state, action) {
      state.loggedIn = false;
      state.role = '';
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export const selectLoggedIn = (state) => state.auth.loggedIn;
export const selectRole = (state) => state.auth.role;
export const selectToken = (state) => state.auth.token;

const authReducer = authSlice.reducer;
export default authReducer;
