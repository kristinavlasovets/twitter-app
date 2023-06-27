import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.xl}vh;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.xxs}%;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  width: ${({ theme }) => theme.width.xl}%;
  height: calc(${({ theme }) => theme.height.xl}vh - ${({ theme }) => theme.height.m}px);

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.width.xl}%;
  }
`;

export const Banner = styled.img`
  height: ${({ theme }) => theme.height.xl}%;
  width: ${({ theme }) => theme.width.m}%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.l}%;
  }
`;

export const Form = styled.div`
  margin: ${({ theme }) => theme.margins.xs}% auto;
  width: ${({ theme }) => theme.width.ss}%;
  padding-left: ${({ theme }) => theme.paddings.m}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.xxl}%;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin: ${({ theme }) => theme.margins.xl}px auto;
  }
`;

export const IconWrapper = styled.button`
  width: ${({ theme }) => theme.width.ss}px;
  height: ${({ theme }) => theme.height.ss}px;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.m}px;
    height: ${({ theme }) => theme.height.m}px;
  }
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

export const Title = styled.h1`
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: 'Roboto', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.xxxl};

  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin-top: ${({ theme }) => theme.margins.m}px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.margins.m}px;
  font-size: ${({ theme }) => theme.fontSizes.mm}px;

  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const Button = css`
  width: ${({ theme }) => theme.width.xxl}px;
  height: ${({ theme }) => theme.height.ss}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-bottom: ${({ theme }) => theme.margins.ss}px;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.fontColor};

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.width.l}%;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.m}%;
    height: ${({ theme }) => theme.height.m}px;
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const ButtonWrapper = styled.button`
  ${Button}
`;

export const ButtonLink = styled(Link)`
  ${Button}
`;

export const ButtonWithIcon = styled.div`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonIcon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  margin-right: ${({ theme }) => theme.paddings.xs}px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.width.m}%;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.l}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.ss}px;
  }
`;

export const TextLink = styled(Link)`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;
  color: ${({ theme }) => theme.colors.BLUE};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.ss}px;
  }
`;

export const Footer = styled.footer`
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.m}px;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    width: ${({ theme }) => theme.width.xl}%;
  }
`;

export const Nav = styled.ul`
  width: ${({ theme }) => theme.width.xl}%;
  margin: ${({ theme }) => theme.margins.xxs} ${({ theme }) => theme.margins.xl}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: ${({ theme }) => theme.height.m}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.s}px;
  }
`;

export const NavItem = styled.li`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  padding: ${({ theme }) => theme.paddings.s};
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.ss}px;
  }
`;

export const NavItemLink = styled(Link)`
  margin: ${({ theme }) => theme.margins.xxs} auto;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.BLUE};
    cursor: pointer;
  }
`;
