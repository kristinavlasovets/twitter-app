import { getDocument } from '@/api/firebase/getDocument';
import { signInWithEmail } from '@/api/firebase/signInWithEmail';
import { FirebaseCollections } from '@/constants/config';
import { IUser } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { SetUserThunkPayload } from '../types';

export const setUserThunk = createAsyncThunk(
  'user/setUser',
  async (options: SetUserThunkPayload, { rejectWithValue }) => {
    try {
      const { email, password } = options;
      const user = await signInWithEmail(email, password);
      const existedUser = (await getDocument(FirebaseCollections.USERS, user!.uid)) as
        | IUser
        | false;

      if (existedUser) {
        return existedUser;
      }
      return {} as IUser;
    } catch (error) {
      return rejectWithValue('Login Error');
    }
  }
);
