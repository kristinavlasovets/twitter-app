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
  color: ${(props) => props.theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
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
`;

export const Title = styled.h3`
  width: ${({ theme }) => theme.width.xl}%;
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.ss}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
`;

export const Subtitle = styled.h4`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  width: ${({ theme }) => theme.width.xl}%;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  align-self: flex-start;
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.margins.s}px;
  width: ${({ theme }) => theme.width.xl}%;
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${(props) => props.theme.fontColor};
  align-self: flex-start;
`;

export const Input = styled.input`
  margin-bottom: ${({ theme }) => theme.margins.ss}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.ss}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background: transparent;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  color: ${(props) => props.theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;

  &::placeholder {
    color: ${(props) => props.theme.fontColor};
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
`;

export const ErrorText = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-start;
`;

export const Selectors = styled.div`
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.m}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Selector = css`
  height: ${({ theme }) => theme.height.m}px;
  background: transparent;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  color: ${(props) => props.theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
    cursor: pointer;
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
