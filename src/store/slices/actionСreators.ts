import { setIsAlertVisible } from './alertSlice/alertSlice';
import { setUserThunk } from './userSlice/thunks/setUserThunk';
import { changeTheme, removeUser, setLoading, setUser, updateUser } from './userSlice/userSlice';

export const allActionCreators = {
  changeTheme,
  setIsAlertVisible,
  setUser,
  updateUser,
  removeUser,
  setLoading,
  setUserThunk,
};
