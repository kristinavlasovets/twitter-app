import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.xs}%;
  margin-left: ${({ theme }) => theme.margins.sss}%;
  width: ${({ theme }) => theme.width.xs}%;
  height: fit-content;
  padding-left: ${({ theme }) => theme.paddings.m}px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
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
    margin-top: ${({ theme }) => theme.margins.xs}%;
    height: fit-content;
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
`;

export const Email = styled.p`
  margin-right: ${({ theme }) => theme.margins.s}px;
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${(props) => props.theme.subtitleColor};
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
`;