import { lazy } from 'react';

import { AppRoutes, IRoute } from './types';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const FeedPage = lazy(() => import('@/pages/FeedPage'));

export const publicAppRoutes: IRoute[] = [
  {
    path: AppRoutes.HOME,
    Element: HomePage,
  },
  {
    path: AppRoutes.SIGN_UP,
    Element: SignUpPage,
  },
  {
    path: AppRoutes.LOGIN,
    Element: LoginPage,
  },
];

export const privateAppRoutes: IRoute[] = [
  {
    path: AppRoutes.PROFILE,
    Element: ProfilePage,
  },
  {
    path: AppRoutes.FEED,
    Element: FeedPage,
  },
];
