import { ThemeType } from '@/constants/styles';
import { IUser } from '@/types';

export interface UserState {
  theme: ThemeType;
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string | null;
}

export type UpdateUserPayload = Partial<IUser>;
