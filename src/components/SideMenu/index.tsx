import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import MenuItem from '@/components/MenuItem';
import { Colors, icons, menuItems, sideMenuText, ThemeMode } from '@/constants';
import { useActions, useAppSelector, usePortal } from '@/hooks';
import { auth } from '@/lib/firebase';
import { themeSelector, userSelector } from '@/store/slices/userSlice/selectors';
import { commonTheme } from '@/styles/theme';
import { checkPath } from '@/utils';

import { AppRoutes } from '../AppRouter/types';
import CreateTweetBlock from '../CreateTweetBlock';
import Portal from '../Portal';

import { Credentials, Email, Icon, MenuWrapper, Name, UserInfo, Wrapper } from './styles';
import { SideMenuProps } from './types';

const { tweetButtonText, logoutButtonText } = sideMenuText;

const { MyLogoSvg, MyPhotoSvg } = icons;

const SideMenu: FC<SideMenuProps> = ({ setTweets }) => {
  const { removeUser } = useActions();

  const [isModalVisible, onOpenModal, onCloseModal] = usePortal();
  const [isBurgerMenuVisible, onOpenBurger, onCloseBurger] = usePortal();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { name, email, id, photo } = useAppSelector(userSelector);
  const currentTheme = useAppSelector(themeSelector);

  const isFeedPath = checkPath(pathname, AppRoutes.FEED);
  const isModal = true;

  const handleNavigate = () => {
    navigate(`/profile/${id}`);
  };

  const handleLogOut = () => {
    signOut(auth);
    removeUser();
  };

  return (
    <MenuWrapper>
      <Icon src={MyLogoSvg} alt="Twitter Logo" onClick={onOpenBurger} />
      <Portal isVisible={isBurgerMenuVisible} onClose={onCloseBurger}>
        <Wrapper isBurgerMenuVisible={isBurgerMenuVisible} isModal={isModal} id="myModal">
          {menuItems.map(({ to, text, src, srcAlt }) => (
            <MenuItem
              key={text}
              path={to}
              alt={text}
              src={currentTheme === ThemeMode.DARK ? srcAlt : src}
              text={text}
              id={id}
            />
          ))}
          {isBurgerMenuVisible && (
            <Portal isVisible={isModalVisible} onClose={onCloseModal}>
              <CreateTweetBlock
                setTweets={setTweets}
                isModal
                onClose={onCloseModal}
                isModalVisible={isModalVisible}
              />
            </Portal>
          )}
          <Button
            width={commonTheme.width.l}
            backgroundColor={Colors.DARK_BLUE}
            color={Colors.WHITE}
            fontSize={commonTheme.fontSizes.xxs}
            margin={commonTheme.margins.s}
            onClick={onOpenModal}
          >
            {tweetButtonText}
          </Button>
          <UserInfo>
            <Icon src={photo || MyPhotoSvg} alt="Twitter Logo" onClick={handleNavigate} />
            <Credentials>
              <Name>{name}</Name>
              <Email>{email}</Email>
            </Credentials>
          </UserInfo>
          {!isFeedPath && (
            <Button
              onClick={handleLogOut}
              width={commonTheme.width.l}
              backgroundColor={Colors.GRAY}
              color={Colors.WHITE}
              fontSize={commonTheme.fontSizes.xxs}
            >
              {logoutButtonText}
            </Button>
          )}
        </Wrapper>
      </Portal>
      <Wrapper>
        {menuItems.map(({ to, text, src, srcAlt }) => (
          <MenuItem
            key={text}
            path={to}
            alt={text}
            src={currentTheme === 'dark' ? srcAlt : src}
            text={text}
            id={id}
          />
        ))}
        {!isBurgerMenuVisible && (
          <Portal isVisible={isModalVisible} onClose={onCloseModal}>
            <CreateTweetBlock
              setTweets={setTweets}
              isModal
              onClose={onCloseModal}
              isModalVisible={isModalVisible}
            />
          </Portal>
        )}
        <Button
          width={commonTheme.width.l}
          backgroundColor={Colors.DARK_BLUE}
          color={Colors.WHITE}
          fontSize={commonTheme.fontSizes.xxs}
          margin={commonTheme.margins.s}
          onClick={onOpenModal}
        >
          {tweetButtonText}
        </Button>
        <UserInfo>
          <Icon src={photo || MyPhotoSvg} alt="Twitter Logo" onClick={handleNavigate} />
          <Credentials>
            <Name>{name}</Name>
            <Email>{email}</Email>
          </Credentials>
        </UserInfo>
        {!isFeedPath && (
          <Button
            onClick={handleLogOut}
            width={commonTheme.width.l}
            backgroundColor={Colors.GRAY}
            color={Colors.WHITE}
            fontSize={commonTheme.fontSizes.xxs}
          >
            {logoutButtonText}
          </Button>
        )}
      </Wrapper>
    </MenuWrapper>
  );
};

export default SideMenu;
