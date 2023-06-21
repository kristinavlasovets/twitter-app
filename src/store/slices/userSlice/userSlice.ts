import { ThemeMode } from '@/constants/styles';
import { IUser } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setUserThunk } from './thunks/setUserThunk';
import { UpdateUserPayload, UserState } from './types';

const initialState: UserState = {
  theme: ThemeMode.LIGHT,
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  isError: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<UpdateUserPayload>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuth = true;
      state.isLoading = action.payload;
      state.user = {} as IUser;
    },
    removeUser: (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as IUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserThunk.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
      state.isError = '';
    });
    builder.addCase(setUserThunk.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
      state.user = {} as IUser;
      state.isError = '';
    });
    builder.addCase(setUserThunk.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as IUser;
      state.isError = 'Login Error';
    });
  },
});

export const { changeTheme, setUser, updateUser, removeUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
