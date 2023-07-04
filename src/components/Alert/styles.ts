import styled from 'styled-components';

export const Message = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.bottom.xs}%;
  right: ${({ theme }) => theme.right.xs}%;
  width: fit-content;
  height: ${({ theme }) => theme.height.xxs}%;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: ${({ theme }) => theme.colors.RED};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.RED};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  opacity: ${({ theme }) => theme.opacities.m};

  z-index: ${({ theme }) => theme.zIndexes.m};
`;
