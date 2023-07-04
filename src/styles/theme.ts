import { Colors } from '@/constants';

import { ICommonTheme, ITheme } from './types';

export const commonTheme: ICommonTheme = {
  dimensions: {
    mobile: 495,
    tablet: 768,
    laptop: 1024,
    bigScreen: 1920,
  },
  fontFamilies: {
    roboto: "'Roboto', sans-serif",
    robotoSerif: "'Roboto Serif', sans-serif",
  },
  fontWeights: {
    xxs: 200,
    xs: 300,
    s: 400,
    m: 500,
    l: 600,
    xl: 700,
    xxl: 800,
    xxxl: 900,
  },
  fontSizes: {
    xxxs: 11,
    xxs: 13,
    xs: 18,
    s: 20,
    ss: 22,
    m: 24,
    mm: 28,
    l: 36,
    xxl: 60,
  },
  colors: {
    WHITE: Colors.WHITE,
    BLACK: Colors.BLACK,
    BLUE: Colors.BLUE,
    DARK_BLUE: Colors.DARK_BLUE,
    LIGHT_GRAY: Colors.LIGHT_GRAY,
    MEDIUM_GRAY: Colors.MEDIUM_GRAY,
    GRAY: Colors.GRAY,
    TEXT_GRAY: Colors.TEXT_GRAY,
    BORDER_GRAY: Colors.BORDER_GRAY,
    DARK_GRAY: Colors.DARK_GRAY,
    RED: Colors.RED,
  },
  margins: {
    xxs: 0,
    xs: 3,
    sss: 5,
    ss: 15,
    s: 25,
    m: 45,
    xl: 150,
  },
  paddings: {
    xxs: 0,
    xs: 15,
    s: 24,
    m: 40,
    mm: 50,
    l: 150,
  },
  width: {
    xs: 16,
    s: 20,
    ss: 40,
    sss: 52,
    m: 60,
    l: 80,
    xl: 100,
    xxl: 300,
  },
  height: {
    xxs: 7,
    xs: 16,
    s: 20,
    ss: 40,
    m: 55,
    l: 80,
    xl: 100,
  },
  borders: {
    s: 1,
    xl: 7,
  },
  borderRadiuses: {
    s: 6,
    l: 20,
    xl: 42,
    xxl: 50,
  },
  right: {
    xs: 5,
  },
  left: {
    xxxs: 0,
    xs: 10,
    s: 20,
    m: 30,
  },
  top: {
    xxxs: 0,
    xxs: 8,
    xs: 45,
    s: 75,
  },
  bottom: {
    xs: 10,
  },
  zIndexes: {
    m: 100,
  },
  opacities: {
    s: 0.6,
    m: 0.8,
    l: 1,
  },
};

export const darkTheme: ITheme = {
  bodyColor: Colors.BLACK,
  fontColor: Colors.WHITE,
  subtitleColor: Colors.WHITE,
  ...commonTheme,
};
export const lightTheme: ITheme = {
  bodyColor: Colors.WHITE,
  fontColor: Colors.BLACK,
  subtitleColor: Colors.TEXT_GRAY,
  ...commonTheme,
};
