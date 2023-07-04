import alertSliceReducer from './alertSlice/alertSlice';
import userSliceReducer from './userSlice/userSlice';

export const allReducers = {
  user: userSliceReducer,
  alert: alertSliceReducer,
};
