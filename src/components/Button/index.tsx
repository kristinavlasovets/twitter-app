import { FC } from 'react';

import { Wrapper } from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
  const {
    backgroundColor,
    color,
    fontSize,
    fontFamily,
    height,
    width,
    opacity,
    margin,
    children,
    disabled,
    onClick,
  } = props;
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
      onClick={onClick && onClick}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
