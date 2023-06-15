import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AlertState } from './types';

const initialState: AlertState = {
  isVisible: false,
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setIsAlertVisible: (state, action: PayloadAction<AlertState>) => {
      const { isVisible, message } = action.payload;
      state.isVisible = isVisible;
      state.message = message;
    },
  },
});

export const { setIsAlertVisible } = alertSlice.actions;

export default alertSlice.reducer;
