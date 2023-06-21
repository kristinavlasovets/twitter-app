import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.top.xxs}%;
  left: ${({ theme }) => theme.left.m}%;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.ss}%;
  height: fit-content;
  max-height: ${({ theme }) => theme.height.l}%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  z-index: ${({ theme }) => theme.zIndexes.m};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    top: ${({ theme }) => theme.top.xxs}%;
    left: ${({ theme }) => theme.left.xs}%;
    width: ${({ theme }) => theme.width.l}%;
  }
`;

export const Form = styled.form`
  width: ${({ theme }) => theme.width.xl}%;
  height: fit-content;
  padding: ${({ theme }) => theme.paddings.s}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
  border: ${({ theme }) => theme.borders.s}px solid ${(props) => props.theme.fontColor};
`;

export const Title = styled.h3`
  width: ${({ theme }) => theme.width.xl}%;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin-bottom: ${({ theme }) => theme.margins.m}px;
    font-size: ${({ theme }) => theme.fontSizes.l}px;
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
  color: ${(props) => props.theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;

  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin-bottom: ${({ theme }) => theme.margins.m}px;
    height: ${({ theme }) => theme.height.m}px;
    padding: ${({ theme }) => theme.paddings.s}px;
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  align-self: flex-end;
  background-color: transparent;
  border: ${({ theme }) => theme.borders.s}px solid transparent;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.width.m}px;
    height: ${({ theme }) => theme.height.m}px;
  }
`;

export const Credentials = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${(props) => props.theme.subtitleColor};
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const ErrorText = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;
