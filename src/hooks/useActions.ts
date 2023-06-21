import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store';
import { allActionCreators } from '@/store/slices/actionСreators';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(allActionCreators, dispatch);
};
