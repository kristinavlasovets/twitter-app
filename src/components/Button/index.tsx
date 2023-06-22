import { FC } from 'react';

import { Wrapper } from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (options) => {
  const {
    height,
    width,
    backgroundColor,
    color,
    fontFamily,
    opacity,
    fontSize,
    margin,
    icon,
    children,
    disabled,
    onClick,
  } = options;
  return (
    <Wrapper
      data-cy="logInButton"
      data-testid="createTweetButton"
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontFamily={fontFamily}
      opacity={opacity}
      fontSize={fontSize}
      margin={margin}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </Wrapper>
  );
};

export default Button;
