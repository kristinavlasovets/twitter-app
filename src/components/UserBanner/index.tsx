import { FC, memo } from 'react';

import { icons, userBannerText } from '@/constants';
import { useAppSelector, usePortal } from '@/hooks';
import { userSelector } from '@/store/slices/userSlice/selectors';

import Portal from '../Portal';
import UserEditModal from '../UserEditModal';

import {
  Button,
  Count,
  Credentials,
  Icon,
  Name,
  Statistics,
  Text,
  TextLink,
  UserInfo,
  Wrapper,
} from './styles';
import { UserBannerProps } from './types';

const { buttonText, followersText, followingText, followersCount, followingCount } = userBannerText;

const { MyPhotoSvg } = icons;

const UserBanner: FC<UserBannerProps> = memo((props) => {
  const { photo, name, email, gender, telegram, id } = props;

  const [isModalVisible, onOpenModal, onCloseModal] = usePortal();

  const {
    id: authUserId,
    name: authUserName,
    email: authUserEmail,
    gender: authUserGender,
    telegram: authUserTelegram,
  } = useAppSelector(userSelector);

  return (
    <Wrapper data-cy="userBannerWrapper">
      <UserInfo>
        <Icon src={photo || MyPhotoSvg} alt="Twitter Logo" />
        <Name data-cy="userBannerName">{id === authUserId ? authUserName : name}</Name>
        <Credentials>{id === authUserId ? authUserEmail : email}</Credentials>
        <Text data-cy="userBannerGender">
          {id === authUserId ? authUserGender : gender}
          <TextLink data-cy="userBannerTelegram" to="#">
            {id === authUserId ? authUserTelegram : telegram}
          </TextLink>
        </Text>
        <Statistics>
          <Count>{followingCount}</Count>
          <Credentials>{followingText}</Credentials>
          <Count>{followersCount}</Count>
          <Credentials>{followersText}</Credentials>
        </Statistics>
      </UserInfo>
      {id === authUserId && (
        <Button data-cy="editButton" onClick={onOpenModal}>
          {buttonText}
        </Button>
      )}
      <Portal isVisible={isModalVisible} onClose={onCloseModal}>
        <UserEditModal onClose={onCloseModal} isModalVisible={isModalVisible} />
      </Portal>
    </Wrapper>
  );
});

export default UserBanner;
