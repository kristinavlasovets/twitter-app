import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  margin-top: ${({ theme }) => theme.margins.ss}%;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.xs}%;
    height: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    margin-top: ${({ theme }) => theme.margins.xs}%;
    height: fit-content;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    height: fit-content;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  margin-right: ${({ theme }) => theme.margins.s}px;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.m}px;
    height: ${({ theme }) => theme.height.m}px;
  }
`;
