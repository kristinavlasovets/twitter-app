import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.form`
  margin: ${({ theme }) => theme.margins.xs}% auto;
  width: ${({ theme }) => theme.width.s}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.width.m}%;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin: ${({ theme }) => theme.margins.ss}% auto;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.ss}px;
  height: ${({ theme }) => theme.height.ss}px;
  align-self: flex-start;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Title = styled.h3`
  width: ${({ theme }) => theme.width.xl}%;
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxxl};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  }
`;

export const Input = styled.input`
  margin-bottom: ${({ theme }) => theme.margins.ss}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.ss}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background: transparent;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;

  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    height: ${({ theme }) => theme.height.l}px;
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const TextLink = styled(Link)`
  margin-top: ${({ theme }) => theme.margins.ss}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const ErrorText = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;
