import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateTypeUser {
  user: string;
  loading: boolean;
  error: { message: string; code: string } | null;
}

const initialState: StateTypeUser = {
  user: 'artsiom',
  loading: true,
  error: null,
};

export const userSlice = createSlice({
  name: 'userSLice',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
