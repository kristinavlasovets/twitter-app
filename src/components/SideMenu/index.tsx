import { FC, useState } from 'react';
import { signOut } from 'firebase/auth';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import MyLogoSvg from '@/assets/logo.svg';
import MyPhotoSvg from '@/assets/photo.svg';
import Button from '@/components/Button';
import MenuItem from '@/components/MenuItem';
import { menuItems, sideMenuText } from '@/constants/config';
import { Colors } from '@/constants/styles';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { auth } from '@/lib/firebase';
import { userSelector } from '@/store/slices/userSlice/selectors';

import CreateTweetBlock from '../CreateTweetBlock';

import { Credentials, Email, Icon, MenuWrapper, Name, UserInfo } from './styles';
import { SideMenuProps } from './types';

const { tweetButtonText, logoutButtonText, twitterAlt } = sideMenuText;

const SideMenu: FC<SideMenuProps> = ({ setTweets }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { removeUser } = useActions();
  const { name, email, id, photo } = useAppSelector(userSelector);
  const isFeedPath = location.pathname === '/feed';

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

  return (
    <MenuWrapper>
      <Icon src={MyLogoSvg} alt={twitterAlt} />
      {menuItems.map(({ to, text, src }) => (
        <MenuItem key={text} path={to} alt={text} src={src} text={text} id={id} />
      ))}
      {createPortal(
        <CreateTweetBlock
          setTweets={setTweets}
          isModal
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />,
        document.body
      )}
      <Button
        width={theme?.width.l}
        backgroundColor={Colors.DARK_BLUE}
        color={Colors.WHITE}
        fontSize={theme?.fontSizes.xxs}
        margin={theme?.margins.s}
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
          width={theme?.width.l}
          backgroundColor={Colors.GRAY}
          color={Colors.WHITE}
          fontSize={theme?.fontSizes.xxs}
        >
          {logoutButtonText}
        </Button>
      )}
    </MenuWrapper>
  );
};

export default SideMenu;
