import { RootState } from '@/store';

export const themeSelector = (state: RootState) => state.user.theme;
export const isAuthSelector = (state: RootState) => state.user.isAuth;
export const userSelector = (state: RootState) => state.user.user;
export const userIdSelector = (state: RootState) => state.user.user.id;
