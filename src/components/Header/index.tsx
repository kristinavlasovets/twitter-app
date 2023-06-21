import { FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { headerText } from '@/constants/config/components';
import { icons } from '@/constants/icons';
import { ThemeMode } from '@/constants/styles';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { isAuthSelector, themeSelector, userSelector } from '@/store/slices/userSlice/selectors';
import { checkIsFeedPath } from '@/utils/helpers/checkIsFeedPath';

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

const Header: FC<HeaderProps> = ({ tweetsCount }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();
  const currentTheme = useAppSelector(themeSelector);
  const isAuth = useAppSelector(isAuthSelector);
  const { name, id } = useAppSelector(userSelector);
  const { changeTheme } = useActions();
  const onHandlerToggleTheme = (theme: ThemeMode) => () => changeTheme(theme);
  const isFeedPath = checkIsFeedPath(pathname);
  const isProfilePath = pathname.includes(`/profile/${id}`);
  const pathId = params.id;

  const onHandlerNavigate = () => {
    navigate(pathname === '/feed/:id' ? `/profile/${id}` : '/feed');
  };

  return (
    <>
      {isAuth && (
        <HeaderWrapper data-cy="header">
          {(isProfilePath && pathId === ':id') || isProfilePath ? (
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
};

export default Header;
