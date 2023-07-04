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

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.m}px;
  height: ${({ theme }) => theme.height.m}px;
  margin-right: ${({ theme }) => theme.margins.xs}%;
  align-self: flex-start;
  background-color: transparent;
  border: ${({ theme }) => theme.borders.s}px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl}%;

  &:hover {
    transform: scale(1.2);
  }
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  color: ${({ theme }) => theme.colors.BLACK};
  background: transparent;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const UserEmail = styled.p`
  margin-right: ${({ theme }) => theme.margins.xs}px;
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  background: transparent;
`;
