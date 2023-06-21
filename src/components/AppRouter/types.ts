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
  EXPLORE = '/explore',
  NOTIFICATIONS = '/notifications',
  MESSAGES = '/messages',
  BOOKMARKS = '/bookmarks',
  LISTS = '/lists',
  MORE = '/more',
  NOT_FOUND = '*',
}
