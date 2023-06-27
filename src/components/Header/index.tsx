import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { headerText, icons, ThemeMode } from '@/constants';
import { useActions, useAppSelector } from '@/hooks';
import { isAuthSelector, themeSelector, userSelector } from '@/store/slices/userSlice/selectors';
import { checkPath } from '@/utils';

import { AppRoutes } from '../AppRouter/types';

import {
  Counter,
  HeaderHomeNav,
  HeaderNav,
  HeaderWrapper,
  Icon,
  Title,
  ToggleSwitch,
} from './styles';
import { HeaderProps } from './types';

const { title, text } = headerText;

const { MyArrowBackSvg, MyWhiteArrowBackSvg } = icons;

const Header: FC<HeaderProps> = memo(({ tweetsCount }) => {
  const { changeTheme } = useActions();
  const handleToggleTheme = (theme: ThemeMode) => () => changeTheme(theme);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuth = useAppSelector(isAuthSelector);
  const { name, id } = useAppSelector(userSelector);
  const currentTheme = useAppSelector(themeSelector);

  const isFeedPath = checkPath(pathname, AppRoutes.FEED);
  const isProfilePath = checkPath(pathname, `/profile/${id}`);

  const handleNavigate = () => {
    navigate(isFeedPath ? `/profile/${id}` : AppRoutes.FEED);
  };

  return (
    <>
      {isAuth && (
        <HeaderWrapper data-cy="header">
          {isProfilePath ? (
            <HeaderNav>
              <Title>{isFeedPath ? title : name}</Title>
              {!isFeedPath && (
                <Counter>
                  {tweetsCount}
                  {text}
                </Counter>
              )}
            </HeaderNav>
          ) : (
            <HeaderHomeNav>
              <Icon
                src={currentTheme === 'dark' ? MyWhiteArrowBackSvg : MyArrowBackSvg}
                alt="Go back Home"
                onClick={handleNavigate}
              />
              <Title>{title}</Title>
            </HeaderHomeNav>
          )}
          <ToggleSwitch
            data-cy="toggleTheme"
            type="checkbox"
            checked={currentTheme === ThemeMode.LIGHT}
            onChange={handleToggleTheme(
              currentTheme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
            )}
          />
        </HeaderWrapper>
      )}
    </>
  );
});

export default Header;
