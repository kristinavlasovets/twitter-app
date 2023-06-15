import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }`;

export const Spinner = styled.div`
  margin: ${({ theme }) => theme.margins.s}% auto;
  border: ${({ theme }) => theme.borders.xl}px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  border-top: ${({ theme }) => theme.borders.xl}px solid ${({ theme }) => theme.colors.DARK_BLUE};
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl}%;
  width: ${({ theme }) => theme.width.xl}px;
  height: ${({ theme }) => theme.height.xl}px;
  animation: ${spin} 2s linear infinite;
`;
