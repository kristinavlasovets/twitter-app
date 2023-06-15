import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MyArrowBackSvg from '@/assets/arrow-back.svg';
import { headerText } from '@/constants/config';
import { ThemeMode } from '@/constants/styles';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { isAuthSelector, themeSelector, userSelector } from '@/store/slices/userSlice/selectors';

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

const { title, text, inputType, backAlt } = headerText;

const Header: FC<HeaderProps> = ({ tweetsCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTheme = useAppSelector(themeSelector);
  const isAuth = useAppSelector(isAuthSelector);
  const { name, id } = useAppSelector(userSelector);
  const { changeTheme } = useActions();
  const onHandlerToggleTheme = (theme: ThemeMode) => () => changeTheme(theme);
  const isFeedPath = location.pathname === '/feed';
  const isProfilePath = location.pathname.includes(`/profile/${id}`);
  const { pathname } = useLocation();
  const pathNameIndex = 2;
  const pathId = pathname.split('/')[pathNameIndex];

  const onHandlerNavigate = () => {
    navigate(location.pathname === '/feed/:id' ? `/profile/${id}` : '/feed');
  };

  return isAuth ? (
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
          <Icon src={MyArrowBackSvg} alt={backAlt} onClick={onHandlerNavigate} />
          <Title>{title}</Title>
        </HeaderHomeNav>
      )}
      <ToggleSwitch
        data-cy="toggleTheme"
        type={inputType}
        checked={currentTheme === ThemeMode.LIGHT}
        onChange={onHandlerToggleTheme(
          currentTheme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
        )}
      />
    </HeaderWrapper>
  ) : null;
};

export default Header;
