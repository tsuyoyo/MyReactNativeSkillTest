import {createSlice} from '@reduxjs/toolkit';
import {getHome} from '../api/home';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
    isFetching: false,
    items: [],
    errorMessage: undefined,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getHome.pending, state => {
        state.isFetching = true;
        state.errorMessage = undefined;
      })
      .addCase(getHome.rejected, state => {
        state.isFetching = false;
        state.errorMessage = 'Failed to fetch home data';
      })
      .addCase(getHome.fulfilled, (state, action) => {
        state.isFetching = false;
        state.items = action.payload;
      });
  },
});
