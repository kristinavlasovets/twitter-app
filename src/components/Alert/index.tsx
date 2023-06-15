import { FC, useEffect } from 'react';

import { deafaultAlertValue } from '@/constants/config';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';

import { Message } from './styles';

const Alert: FC = () => {
  const { setIsAlertVisible } = useActions();
  const { isVisible, message } = useAppSelector((state) => state.alert);

  const visibilityAlertTime = 5000;

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setIsAlertVisible(deafaultAlertValue), visibilityAlertTime);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }
  return <Message>{message}</Message>;
};

export default Alert;
