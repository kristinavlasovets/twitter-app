import { ReactNode } from 'react';

export interface PortalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}
