import styled from 'styled-components';

import { LikeCountProps } from './types';

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

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    width: ${({ theme }) => theme.width.xl}%;
  }
`;

export const Tweet = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  padding-bottom: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.bodyColor};
`;

export const TweetContentWrapper = styled.div`
  width: ${({ theme }) => theme.width.xl}%;
  padding-left: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.bottom.xs}%;
  right: ${({ theme }) => theme.right.xs}%;
  width: ${({ theme }) => theme.width.xs}%;
  height: ${({ theme }) => theme.height.xl}%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;

  z-index: ${({ theme }) => theme.zIndexes.m};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.m}px;
  height: ${({ theme }) => theme.height.m}px;
  align-self: flex-start;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl}%;
  z-index: ${({ theme }) => theme.zIndexes.m};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImageIcon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Info = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width.xl}%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const EditIcon = styled.img`
  position: absolute;
  right: ${({ theme }) => theme.right.xs}%;
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  align-self: flex-start;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Name = styled.p`
  margin-right: ${({ theme }) => theme.margins.xs}%;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-family: ${({ theme }) => theme.fontFamilies.robotoSerif};
  color: ${(props) => props.theme.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Credentials = styled.p`
  margin-right: ${({ theme }) => theme.margins.xs}px;
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${(props) => props.theme.subtitleColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const TweetText = styled.p`
  margin-top: ${({ theme }) => theme.margins.ss}px;
  margin-bottom: ${({ theme }) => theme.margins.sss}%;
  width: ${({ theme }) => theme.width.l}%;
  height: fit-content;
  background: transparent;
  color: ${(props) => props.theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: ${({ theme }) => theme.margins.xs}px;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.ss}px;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.width.xl}%;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
`;

export const LikeCount = styled.p<LikeCountProps>`
  margin-left: ${({ theme }) => theme.margins.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme, isLiked }) => (isLiked ? theme.colors.RED : theme.fontColor)};
`;
