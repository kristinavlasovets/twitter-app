import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.header`
  margin-top: ${({ theme }) => theme.margins.xs}%;
  margin-right: ${({ theme }) => theme.margins.xs}%;
  width: ${({ theme }) => theme.width.s}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.l}%;
  }
`;

export const SearchWrapper = styled.form`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.paddings.xs}px;
  padding-right: ${({ theme }) => theme.paddings.xs}px;
  background: ${({ theme }) => theme.colors.MEDIUM_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
`;

export const Input = styled.input`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.l}%;
  height: ${({ theme }) => theme.height.xl}%;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};

  &::placeholder {
    ${({ theme }) => theme.opacities.m};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.xs}px;
  height: ${({ theme }) => theme.height.xs}px;
  background: transparent;
  opacity: ${({ theme }) => theme.opacities.s};

  &:hover {
    transform: scale(1.1);
    opacity: ${({ theme }) => theme.opacities.l};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.s}px;
    height: ${({ theme }) => theme.height.s}px;
  }
`;

export const ResultWrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xs}% auto;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.MEDIUM_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
`;

export const Title = styled.p`
  height: ${({ theme }) => theme.height.xl}%;
  width: ${({ theme }) => theme.width.xl}%;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${({ theme }) => theme.colors.BLACK};
  background: transparent;
`;

export const ResultList = styled.ul`
  margin: ${({ theme }) => theme.margins.xs}% auto;
  width: ${({ theme }) => theme.width.xl}%;
  background-color: transparent;
`;

export const TextLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  background: transparent;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const Nav = styled.ul`
  width: ${({ theme }) => theme.width.xl}%;
  height: fit-content;
  margin-top: ${({ theme }) => theme.margins.xs}%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const NavItem = styled.li`
  margin-top: ${({ theme }) => theme.margins.xs}%;
  margin-left: ${({ theme }) => theme.margins.xs}%;
  font-size: ${({ theme }) => theme.fontSizes.xxxs}px;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const NavItemLink = styled(Link)`
  color: ${(props) => props.theme.subtitleColor};
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.BLUE};
    cursor: pointer;
  }
`;
