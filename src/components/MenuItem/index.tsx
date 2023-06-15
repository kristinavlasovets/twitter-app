import { FC } from 'react';

import { Icon, Wrapper } from './styles';
import { MenuItemProps } from './types';

const MenuItem: FC<MenuItemProps> = ({ path, src, alt, text, id }) => {
  if (text === ' Profile') {
    return (
      <Wrapper to={`/profile/${id}`}>
        <Icon src={src} alt={alt} />
        {text}
      </Wrapper>
    );
  }
  return (
    <Wrapper to={path}>
      <Icon src={src} alt={alt} />
      {text}
    </Wrapper>
  );
};

export default MenuItem;
