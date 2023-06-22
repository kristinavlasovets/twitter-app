import { FC, memo } from 'react';

import { Icon, Wrapper } from './styles';
import { MenuItemProps } from './types';

const MenuItem: FC<MenuItemProps> = memo(({ path, src, alt, text, id }) => {
  if (text === ' Profile') {
    return (
      <Wrapper to={`/profile/${id}`}>
        <Icon src={src} alt={alt} />
        {text}
      </Wrapper>
    );
  }
  return (
    <Wrapper to={path} data-testid="profileButton">
      <Icon src={src} alt={alt} />
      {text}
    </Wrapper>
  );
});

export default MenuItem;
