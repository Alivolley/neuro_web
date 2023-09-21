import { createSlice } from '@reduxjs/toolkit';

const loginStatus = createSlice({
   name: 'loginStatus',
   initialState: false,

   reducers: {
      changeLoginStatus: state => !state,
   },
});

export const { changeLoginStatus } = loginStatus.actions;
export default loginStatus.reducer;
