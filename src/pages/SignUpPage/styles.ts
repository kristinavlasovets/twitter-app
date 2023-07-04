import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const hint = keyframes`
  0% {transform:  scale(1)}
  100% {transform: scale(1.02)}`;

export const Wrapper = styled.form`
  margin: ${({ theme }) => theme.margins.ss}px auto;
  padding: ${({ theme }) => theme.paddings.xxs} ${({ theme }) => theme.paddings.mm}px
    ${({ theme }) => theme.paddings.xxs};
  width: ${({ theme }) => theme.width.ss}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin: ${({ theme }) => theme.margins.ss}% auto;
  }
`;

export const IconWrapper = styled.button`
  width: ${({ theme }) => theme.width.ss}px;
  height: ${({ theme }) => theme.height.ss}px;
  border: none;
  background: transparent;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.ss}px;
  height: ${({ theme }) => theme.height.ss}px;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.m}px;
    height: ${({ theme }) => theme.height.m}px;
  }
`;

export const Title = styled.h3`
  width: ${({ theme }) => theme.width.xl}%;
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.ss}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  }
`;

export const Subtitle = styled.h4`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  width: ${({ theme }) => theme.width.xl}%;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.margins.s}px;
  width: ${({ theme }) => theme.width.xl}%;
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.fontColor};
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
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
    padding: ${({ theme }) => theme.paddings.s}px;
    font-size: ${({ theme }) => theme.fontSizes.mm}px;
  }
`;

export const TextLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mm}px;
  }
`;

export const ErrorText = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.mm}px;
  }
`;

export const Selectors = styled.div`
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.m}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    height: ${({ theme }) => theme.height.xl}px;
    padding: ${({ theme }) => theme.paddings.s}px;
  }
`;

export const Selector = css`
  height: ${({ theme }) => theme.height.m}px;
  background: transparent;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    height: ${({ theme }) => theme.height.xl}px;
    padding: ${({ theme }) => theme.paddings.s}px;
    font-size: ${({ theme }) => theme.fontSizes.mm}px;
  }
`;

export const MonthSelector = styled.select`
  ${Selector}
  width: ${({ theme }) => theme.width.sss}%;
`;
export const DayYearSelector = styled.select`
  ${Selector}
  width: ${({ theme }) => theme.width.s}%;
`;
