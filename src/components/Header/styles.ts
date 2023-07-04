import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.l}px;
  padding: ${({ theme }) => theme.paddings.xxs} ${({ theme }) => theme.paddings.mm}px
    ${({ theme }) => theme.paddings.xxs};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bodyColor};
  border-bottom: ${({ theme }) => theme.borders.s}px solid
    ${({ theme }) => theme.colors.BORDER_GRAY};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    height: ${({ theme }) => theme.height.xl}px;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  margin-right: ${({ theme }) => theme.margins.s}px;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.sss}px;
    height: ${({ theme }) => theme.height.ss}px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bodyColor};
`;

export const HeaderHomeNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ss}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${({ theme }) => theme.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const Counter = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.subtitleColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const ToggleSwitch = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  height: ${({ theme }) => theme.height.s}px;
  width: ${({ theme }) => theme.width.ss}px;
  background-color: ${({ theme }) => theme.bodyColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.fontColor};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.fontColor};
  }

  &:before {
    content: '';
    position: absolute;
    height: ${({ theme }) => theme.height.xs}px;
    width: ${({ theme }) => theme.width.xs}px;
    left: ${({ theme }) => theme.left.s}px;
    background-color: ${({ theme }) => theme.bodyColor};
    border-radius: ${({ theme }) => theme.borderRadiuses.xl}%;
    border: 1px solid ${({ theme }) => theme.fontColor};
    cursor: pointer;
    transition: 0.3s;
  }

  &:checked::before {
    left: ${({ theme }) => theme.left.xxxs}px;
  }
`;
