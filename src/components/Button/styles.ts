import styled, { keyframes } from 'styled-components';

import { WrapperProps } from './types';

const hint = keyframes`
  0% {transform:  scale(1)}
  100% {transform: scale(1.02)}`;

export const Wrapper = styled.button<WrapperProps>`
  width: ${({ theme, width }) => width || theme.width.xl}%;
  height: ${({ theme, height }) => height || theme.height.ss}px;
  margin-top: ${({ theme, margin }) => margin || theme.margins.xxs}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.BLUE};
  border-radius: ${({ theme }) => theme.borderRadiuses.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${({ theme, fontFamily }) => fontFamily || theme.fontFamilies.robotoSerif};
  color: ${({ color }) => color};
  opacity: ${({ theme, opacity }) => opacity || theme.opacities.l};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ss}%;
  }

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
    opacity: ${({ theme, disabled }) => (disabled ? theme.opacities.s : theme.opacities.l)};
    cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  }

  position: relative;
  border: none;
`;
