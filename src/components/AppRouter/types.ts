import { ComponentType } from 'react';

export interface IRoute {
  path: string;
  Element: ComponentType;
}

export enum AppRoutes {
  HOME = '/',
  SIGN_UP = '/sign-up',
  LOGIN = '/login',
  PROFILE = '/profile/:id',
  FEED = '/feed/:id',
  NOT_FOUND = '*',
}
