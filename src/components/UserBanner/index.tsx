import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import MyPhotoSvg from '@/assets/photo.svg';
import { userBannerText } from '@/constants/config';
import { useAppSelector } from '@/hooks/useAppSelector';
import { userSelector } from '@/store/slices/userSlice/selectors';

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

const { buttonText, twitterAlt, followersText, followingText, followersCount, followingCount } =
  userBannerText;

const UserBanner: FC<UserBannerProps> = ({ photo, name, email, gender, telegram, id }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {
    id: authUserId,
    name: authUserName,
    email: authUserEmail,
    gender: authUserGender,
    telegram: authUserTelegram,
  } = useAppSelector(userSelector);

  const onHandlerEditProfile = () => {
    setIsModalVisible(true);
  };

  return (
    <Wrapper>
      <UserInfo>
        <Icon src={photo || MyPhotoSvg} alt={twitterAlt} />
        <Name>{id === authUserId ? authUserName : name}</Name>
        <Credentials>{id === authUserId ? authUserEmail : email}</Credentials>
        <Text>
          {id === authUserId ? authUserGender : gender}
          <TextLink to="#">{id === authUserId ? authUserTelegram : telegram}</TextLink>
        </Text>
        <Statistics>
          <Count>{followingCount}</Count>
          <Credentials>{followingText}</Credentials>
          <Count>{followersCount}</Count>
          <Credentials>{followersText}</Credentials>
        </Statistics>
      </UserInfo>
      {id === authUserId && (
        <Button data-cy="editButton" onClick={onHandlerEditProfile}>
          {buttonText}
        </Button>
      )}
      {createPortal(
        <UserEditModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />,
        document.body
      )}
    </Wrapper>
  );
};

export default UserBanner;
