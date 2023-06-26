import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { headerText, icons, ThemeMode } from '@/constants';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { isAuthSelector, themeSelector, userSelector } from '@/store/slices/userSlice/selectors';
import { checkPath } from '@/utils/helpers/checkPath';

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

const { title, text, backAlt } = headerText;

const { MyArrowBackSvg, MyWhiteArrowBackSvg } = icons;

const Header: FC<HeaderProps> = memo(({ tweetsCount }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentTheme = useAppSelector(themeSelector);
  const isAuth = useAppSelector(isAuthSelector);
  const { name, id } = useAppSelector(userSelector);
  const { changeTheme } = useActions();
  const onHandlerToggleTheme = (theme: ThemeMode) => () => changeTheme(theme);
  const isFeedPath = checkPath(pathname, AppRoutes.FEED);
  const isProfilePath = checkPath(pathname, `/profile/${id}`);

  const onHandlerNavigate = () => {
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
                alt={backAlt}
                onClick={onHandlerNavigate}
              />
              <Title>{title}</Title>
            </HeaderHomeNav>
          )}
          <ToggleSwitch
            data-cy="toggleTheme"
            type="checkbox"
            checked={currentTheme === ThemeMode.LIGHT}
            onChange={onHandlerToggleTheme(
              currentTheme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
            )}
          />
        </HeaderWrapper>
      )}
    </>
  );
});

export default Header;
