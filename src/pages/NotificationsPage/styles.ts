import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.xl}%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.margins.s}%;

  font-size: ${({ theme }) => theme.fontSizes.ss}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${(props) => props.theme.fontColor};
`;
