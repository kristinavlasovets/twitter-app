import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '@/hooks/useAppSelector';
import { isAuthSelector } from '@/store/slices/userSlice/selectors';

import { privateAppRoutes, publicAppRoutes } from './config';
import { AppRoutes } from './types';

const AppRouter: FC = () => {
  const isAuth = useAppSelector(isAuthSelector);
  const { FEED, HOME, NOT_FOUND } = AppRoutes;

  return (
    <Routes>
      {isAuth
        ? privateAppRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))
        : publicAppRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}

      <Route path={NOT_FOUND} element={<Navigate to={isAuth ? FEED : HOME} replace />} />
    </Routes>
  );
};

export default AppRouter;
