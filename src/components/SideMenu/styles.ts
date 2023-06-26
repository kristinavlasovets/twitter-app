import styled, { keyframes } from 'styled-components';

import { MenuWrapperProps } from './types';

const fade = keyframes` 
0% {opacity: 0}
100% { opacity: 1}
`;

export const Wrapper = styled.div<MenuWrapperProps>`
  position: ${({ isModal }) => (isModal ? 'fixed' : 'relative')};
  top: ${({ theme, isModal }) => (isModal ? theme.top.xxs : '')}%;
  left: ${({ theme, isModal }) => (isModal ? theme.left.xs : '')}%;
  width: ${({ theme, isModal }) => (isModal ? 'fit-content' : theme.width.l)}%;
  display: ${({ isModal }) => (isModal ? 'none' : 'flex')};
  border-radius: ${({ theme, isModal }) => (isModal ? theme.borderRadiuses.l : '')}px;
  border: ${({ theme, isModal }) => (isModal ? theme.borders.s : '')}px solid
    ${(props) => props.theme.fontColor};
  flex-direction: column;
  align-self: flex-start;

  z-index: ${({ theme }) => theme.zIndexes.m};

  animation-duration: 0.5s;
  animation-name: ${fade};
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    display: ${({ isBurgerMenuVisible }) => (isBurgerMenuVisible ? 'flex' : 'none')};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    display: ${({ isBurgerMenuVisible }) => (isBurgerMenuVisible ? 'flex' : 'none')};
  }
`;

export const MenuWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.xs}%;
  margin-left: ${({ theme }) => theme.margins.sss}%;
  width: ${({ theme }) => theme.width.xs}%;
  height: fit-content;
  padding-left: ${({ theme }) => theme.paddings.xxs}px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-left: ${({ theme }) => theme.margins.s}px;
  }
`;

export const UserInfo = styled.div`
  margin: ${({ theme }) => theme.margins.s}% auto;
  width: ${({ theme }) => theme.width.xl}%;
  padding-top: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.xs}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    margin: ${({ theme }) => theme.margins.xs}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    flex-direction: column;
  }
`;

export const Credentials = styled.div`
  width: ${({ theme }) => theme.width.xl}%;
  height: fit-content;
  padding-left: ${({ theme }) => theme.paddings.s}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.bodyColor};
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${(props) => props.theme.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Email = styled.p`
  margin-right: ${({ theme }) => theme.margins.s}px;
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${(props) => props.theme.subtitleColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.ss}px;
  height: ${({ theme }) => theme.height.ss}px;
  background-color: transparent;
  align-self: flex-start;
  border: ${({ theme }) => theme.borders.s}px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl}%;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-left: ${({ theme }) => theme.paddings.s}px;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.m}px;
    height: ${({ theme }) => theme.height.m}px;
  }
`;
