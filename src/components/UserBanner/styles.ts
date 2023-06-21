import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const hint = keyframes`
  0% {transform:  scale(1)}
  100% {transform: scale(1.02)}`;

export const Wrapper = styled.header`
  position: relative;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  height: fit-content;
  padding: ${({ theme }) => theme.paddings.s}px ${({ theme }) => theme.paddings.xs}px
    ${({ theme }) => theme.paddings.xxs};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.bodyColor};
  border-bottom: ${({ theme }) => theme.borders.s}px solid
    ${({ theme }) => theme.colors.BORDER_GRAY};
`;

export const UserInfo = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  padding-top: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.bodyColor};
`;

export const Icon = styled.img`
  position: absolute;
  top: -${({ theme }) => theme.top.s}px;
  left: -${({ theme }) => theme.left.xs}px;
  width: ${({ theme }) => theme.width.xl}px;
  height: ${({ theme }) => theme.height.xl}px;
  align-self: flex-start;
  background-color: transparent;
  border: ${({ theme }) => theme.borders.s}px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl}%;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ss}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${(props) => props.theme.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Credentials = styled.p`
  margin-right: ${({ theme }) => theme.margins.s}px;
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${(props) => props.theme.subtitleColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.width.m}%;
  margin-top: ${({ theme }) => theme.margins.ss}px;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    height: fit-content;
  }
`;

export const TextLink = styled(Link)`
  margin-left: ${({ theme }) => theme.margins.xs}%;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    height: fit-content;
  }
`;

export const Statistics = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.m}px;
  width: ${({ theme }) => theme.width.xl}%;
  padding-top: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  background-color: transparent;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Count = styled.p`
  margin-right: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${(props) => props.theme.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    height: fit-content;
  }
`;

export const Button = styled.button`
  width: ${({ theme }) => theme.width.xl}px;
  height: ${({ theme }) => theme.height.ss}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${(props) => props.theme.fontColor};

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
    cursor: pointer;
  }
`;
