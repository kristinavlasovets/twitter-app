import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const User = styled.li`
  width: ${({ theme }) => theme.width.xl}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  color: ${({ theme }) => theme.colors.BLACK};
  background: transparent;
`;
