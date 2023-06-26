import { FC, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import MenuItem from '@/components/MenuItem';
import { Colors, icons, menuItems, sideMenuText, ThemeMode } from '@/constants';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { auth } from '@/lib/firebase';
import { themeSelector, userSelector } from '@/store/slices/userSlice/selectors';
import { commonTheme } from '@/styles/theme';
import { checkPath } from '@/utils/helpers/checkPath';
import { createNewPortal } from '@/utils/helpers/createNewPortal';

import { AppRoutes } from '../AppRouter/types';
import CreateTweetBlock from '../CreateTweetBlock';

import { Credentials, Email, Icon, MenuWrapper, Name, UserInfo, Wrapper } from './styles';
import { SideMenuProps } from './types';

const { tweetButtonText, logoutButtonText, twitterAlt } = sideMenuText;

const { MyLogoSvg, MyPhotoSvg } = icons;

const SideMenu: FC<SideMenuProps> = ({ setTweets }) => {
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { removeUser } = useActions();
  const { name, email, id, photo } = useAppSelector(userSelector);
  const currentTheme = useAppSelector(themeSelector);
  const isFeedPath = checkPath(pathname, AppRoutes.FEED);
  const isModal = true;

  const onHandlerNavigate = () => {
    navigate(`/profile/${id}`);
  };

  const onHandlerLogOut = () => {
    signOut(auth);
    removeUser();
  };

  const onHandlerShowModal = () => {
    setIsModalVisible(true);
  };

  const onHandlerShowMenu = () => {
    setIsBurgerMenuVisible(!isBurgerMenuVisible);
  };

  return (
    <MenuWrapper>
      <Icon src={MyLogoSvg} alt={twitterAlt} onClick={onHandlerShowMenu} />
      {createNewPortal(
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
          {isBurgerMenuVisible &&
            createNewPortal(
              <CreateTweetBlock
                setTweets={setTweets}
                isModal
                setIsModalVisible={setIsModalVisible}
                isModalVisible={isModalVisible}
              />
            )}
          <Button
            width={commonTheme.width.l}
            backgroundColor={Colors.DARK_BLUE}
            color={Colors.WHITE}
            fontSize={commonTheme.fontSizes.xxs}
            margin={commonTheme.margins.s}
            onClick={onHandlerShowModal}
          >
            {tweetButtonText}
          </Button>
          <UserInfo>
            <Icon src={photo || MyPhotoSvg} alt={twitterAlt} onClick={onHandlerNavigate} />
            <Credentials>
              <Name>{name}</Name>
              <Email>{email}</Email>
            </Credentials>
          </UserInfo>
          {!isFeedPath && (
            <Button
              onClick={onHandlerLogOut}
              width={commonTheme.width.l}
              backgroundColor={Colors.GRAY}
              color={Colors.WHITE}
              fontSize={commonTheme.fontSizes.xxs}
            >
              {logoutButtonText}
            </Button>
          )}
        </Wrapper>
      )}
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
        {!isBurgerMenuVisible &&
          createNewPortal(
            <CreateTweetBlock
              setTweets={setTweets}
              isModal
              setIsModalVisible={setIsModalVisible}
              isModalVisible={isModalVisible}
            />
          )}
        <Button
          width={commonTheme.width.l}
          backgroundColor={Colors.DARK_BLUE}
          color={Colors.WHITE}
          fontSize={commonTheme.fontSizes.xxs}
          margin={commonTheme.margins.s}
          onClick={onHandlerShowModal}
        >
          {tweetButtonText}
        </Button>
        <UserInfo>
          <Icon src={photo || MyPhotoSvg} alt={twitterAlt} onClick={onHandlerNavigate} />
          <Credentials>
            <Name>{name}</Name>
            <Email>{email}</Email>
          </Credentials>
        </UserInfo>
        {!isFeedPath && (
          <Button
            onClick={onHandlerLogOut}
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
