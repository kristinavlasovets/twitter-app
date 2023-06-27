import { FC, useEffect } from 'react';

import { deafaultAlertValue } from '@/constants';
import { useActions, useAppSelector } from '@/hooks';

import { Message } from './styles';

const Alert: FC = () => {
  const { setIsAlertVisible } = useActions();
  const { isVisible, message } = useAppSelector((state) => state.alert);

  const visibilityAlertTime = 5000;

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setIsAlertVisible(deafaultAlertValue), visibilityAlertTime);

    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }
  return <Message data-cy="errorAlert">{message}</Message>;
};

export default Alert;
