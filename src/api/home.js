import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getHome = createAsyncThunk('home/getHome', async thunkAPI => {
  const response = await axios.get(
    'https://s3-ap-northeast-1.amazonaws.com/m-et/Android/json/all.json',
  );
  return response.data;
});
