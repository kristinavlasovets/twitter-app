import { ICommonTheme } from './styles/types';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ICommonTheme {
    bodyColor: string;
    fontColor: string;
    subtitleColor: string;
  }
}
