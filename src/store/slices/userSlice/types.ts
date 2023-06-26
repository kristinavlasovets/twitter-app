import { ThemeType } from '@/constants';
import { IUser } from '@/types';

export interface UserState {
  theme: ThemeType;
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string;
}

export type UpdateUserPayload = Pick<IUser, 'surname' | 'gender' | 'name' | 'telegram'>;

export type SetUserThunkPayload = Pick<IUser, 'email' | 'password'>;
