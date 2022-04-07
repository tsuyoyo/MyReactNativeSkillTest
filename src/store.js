import {configureStore} from '@reduxjs/toolkit';
import {homeSlice} from './slice/HomeSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});
