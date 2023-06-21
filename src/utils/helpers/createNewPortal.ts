import { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export const createNewPortal = (component: ReactNode): ReactPortal =>
  createPortal(component, document.body);
