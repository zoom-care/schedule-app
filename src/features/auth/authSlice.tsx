import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { authApiSlice } from './authApiSlice';
import { LoginResponse } from '../../zoomcare-api';

const initialState: LoginResponse = {
  username: '',
  authToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.username = payload.username;
        state.authToken = payload.authToken;
      }
    );
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;

export const currentUsername = (state: RootState) => state.auth.username;
export const currentAuthToken = (state: RootState) => state.auth.authToken;
