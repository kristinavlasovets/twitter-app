import styled, { keyframes } from 'styled-components';

import { WrapperProps } from './types';

const fade = keyframes` 
0% {opacity: 0}
100% { opacity: 1}
`;

export const Wrapper = styled.div<WrapperProps>`
  position: ${({ isModal }) => (isModal ? 'fixed' : 'relative')};
  top: ${({ theme, isModal }) => (isModal ? theme.top.xxs : '')}%;
  left: ${({ theme, isModal }) => (isModal ? theme.left.s : '')}%;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme, isModal }) => (isModal ? theme.width.sss : theme.width.xl)}%;
  height: fit-content;
  padding: ${({ theme }) => theme.paddings.s}px ${({ theme }) => theme.paddings.xs}px
    ${({ theme }) => theme.paddings.xxs};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bodyColor};
  border-bottom: ${({ theme }) => theme.borders.s}px solid
    ${({ theme }) => theme.colors.BORDER_GRAY};

  border-radius: ${({ theme, isModal }) => (isModal ? theme.borderRadiuses.l : 'none')}px;
  border: ${({ theme, isModal }) => (isModal ? theme.borders.s : 'none')}px solid
    ${({ theme }) => theme.fontColor};

  z-index: ${({ theme }) => theme.zIndexes.m};

  animation-duration: 0.5s;
  animation-name: ${({ isModal }) => !isModal && fade};
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    top: ${({ theme, isModal }) => (isModal ? theme.top.xs : '')}%;
    left: ${({ theme, isModal }) => (isModal ? theme.left.xs : '')}%;
    width: ${({ theme, isModal }) => (isModal ? theme.width.l : theme.width.xl)}%;
  }
`;

export const Tweet = styled.form`
  position: relative;
  margin: ${({ theme }) => theme.margins.xxs} auto;
  width: ${({ theme }) => theme.width.xl}%;
  padding-bottom: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: transparent;
`;

export const TextAreaWrapper = styled.div`
  width: ${({ theme }) => theme.width.xl}%;
  padding-left: ${({ theme }) => theme.paddings.s}px;
  height: fit-content;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width.m}px;
  height: ${({ theme }) => theme.height.m}px;
  align-self: flex-start;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl}%;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImageIcon = styled.img`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.s}px;
  align-self: flex-start;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TextArea = styled.textarea`
  margin-top: ${({ theme }) => theme.margins.ss}px;
  margin-bottom: ${({ theme }) => theme.margins.ss}px;
  width: ${({ theme }) => theme.width.xl}%;
  height: ${({ theme }) => theme.height.ss}px;
  background: transparent;
  color: ${({ theme }) => theme.subtitleColor};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.subtitleColor};
    opacity: ${({ theme }) => theme.opacities.m};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const ErrorText = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: flex-start;
`;

export const FileWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.ss}px;
  background-color: transparent;
`;

export const UploadFile = styled.input``;

export const UploadFileLabel = styled.label`
  background-color: transparent;
  justify-content: start;
  cursor: pointer;
`;

export const PreloadImage = styled.img`
  margin-bottom: ${({ theme }) => theme.margins.ss}px;
  width: ${({ theme }) => theme.width.s}%;
  height: fit-content;
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
`;
