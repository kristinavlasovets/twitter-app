import { lazy } from 'react';

import { AppRoutes, IRoute } from './types';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const FeedPage = lazy(() => import('@/pages/FeedPage'));
const ExplorePage = lazy(() => import('@/pages/ExplorePage'));
const NotificationsPage = lazy(() => import('@/pages/NotificationsPage'));
const MessagesPage = lazy(() => import('@/pages/MessagesPage'));
const BookmarksPage = lazy(() => import('@/pages/BookmarksPage'));
const ListsPage = lazy(() => import('@/pages/ListsPage'));
const MorePage = lazy(() => import('@/pages/MorePage'));

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
  {
    path: AppRoutes.FEED_TWEET,
    Element: FeedPage,
  },
  {
    path: AppRoutes.EXPLORE,
    Element: ExplorePage,
  },
  {
    path: AppRoutes.NOTIFICATIONS,
    Element: NotificationsPage,
  },
  {
    path: AppRoutes.MESSAGES,
    Element: MessagesPage,
  },
  {
    path: AppRoutes.BOOKMARKS,
    Element: BookmarksPage,
  },
  {
    path: AppRoutes.LISTS,
    Element: ListsPage,
  },
  {
    path: AppRoutes.MORE,
    Element: MorePage,
  },
];
