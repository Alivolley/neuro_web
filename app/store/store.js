import { configureStore } from '@reduxjs/toolkit';
import loginStatus from './reducers/loginStatus';

const store = configureStore({
   reducer: {
      loginStatus,
   },
});

export default store;
