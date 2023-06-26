import { Colors } from '@/constants';

export interface ICommonTheme {
  dimensions: {
    mobile: number;
    tablet: number;
    laptop: number;
    bigScreen: number;
  };
  fontFamilies: {
    roboto: string;
    robotoSerif: string;
  };
  fontWeights: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  fontSizes: {
    xxxs: number;
    xxs: number;
    xs: number;
    s: number;
    ss: number;
    m: number;
    mm: number;
    l: number;
    xxl: number;
  };
  colors: {
    WHITE: string;
    BLACK: string;
    BLUE: string;
    DARK_BLUE: string;
    LIGHT_GRAY: string;
    MEDIUM_GRAY: string;
    GRAY: string;
    TEXT_GRAY: string;
    BORDER_GRAY: string;
    DARK_GRAY: string;
    RED: string;
  };
  margins: {
    xxs: number;
    xs: number;
    sss: number;
    ss: number;
    s: number;
    m: number;
    xl: number;
  };
  paddings: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    mm: number;
    l: number;
  };
  width: {
    xs: number;
    s: number;
    ss: number;
    sss: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  height: {
    xxs: number;
    xs: number;
    s: number;
    ss: number;
    m: number;
    l: number;
    xl: number;
  };
  borders: {
    s: number;
    xl: number;
  };
  borderRadiuses: {
    s: number;
    l: number;
    xl: number;
    xxl: number;
  };
  right: {
    xs: number;
  };
  left: {
    xxxs: number;
    xs: number;
    s: number;
    m: number;
  };
  top: {
    xxxs: number;
    xxs: number;
    xs: number;
    s: number;
  };
  bottom: {
    xs: number;
  };
  zIndexes: {
    m: number;
  };
  opacities: {
    s: number;
    m: number;
    l: number;
  };
}

export interface ITheme extends ICommonTheme {
  bodyColor: Colors;
  fontColor: Colors;
  subtitleColor: Colors;
}
