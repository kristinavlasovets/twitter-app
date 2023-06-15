import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store';
import { allActionCreators } from '@/store/slices/action-creators';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => bindActionCreators(allActionCreators, dispatch), [dispatch]);
};
