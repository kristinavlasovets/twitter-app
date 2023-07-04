import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useOnClickOutside } from '@/hooks';

import { Wrapper } from './styles';
import { PortalProps } from './types';

const Portal: FC<PortalProps> = (props) => {
  const { isVisible, children, onClose } = props;

  const ref = useRef(null);
  useOnClickOutside({ ref, handler: onClose });

  if (!isVisible) {
    return null;
  }
  return createPortal(<Wrapper ref={ref}>{children}</Wrapper>, document.body);
};

export default Portal;
