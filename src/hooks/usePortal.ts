import { useState } from 'react';

export const usePortal = () => {
  const [state, setState] = useState<boolean>(false);

  const onOpenPortal = () => {
    setState(true);
  };

  const onClosePortal = () => {
    setState(false);
  };

  return [state, onOpenPortal, onClosePortal] as const;
};
