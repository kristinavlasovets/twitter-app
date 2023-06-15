import { setIsAlertVisible } from './alertSlice/alertSlice';
import {
  changeTheme,
  removeUser,
  setLoading,
  setUser,
  setUserError,
  updateUser,
} from './userSlice/userSlice';

export const allActionCreators = {
  changeTheme,
  setIsAlertVisible,
  setUser,
  updateUser,
  removeUser,
  setLoading,
  setUserError,
};
