import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.xl}%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.width.xl}%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainWrapper = styled.header`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.sss}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }
`;

export const Banner = styled.img`
  height: ${({ theme }) => theme.height.xl}%;
  width: ${({ theme }) => theme.width.xl}%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }
`;

export const Title = styled.p`
  height: ${({ theme }) => theme.height.xl}%;
  width: ${({ theme }) => theme.width.xl}%;
  padding: ${({ theme }) => theme.paddings.s}px;
  padding-left: ${({ theme }) => theme.paddings.mm}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${(props) => props.theme.fontColor};
  border-bottom: ${({ theme }) => theme.borders.s}px solid
    ${({ theme }) => theme.colors.BORDER_GRAY};
`;
