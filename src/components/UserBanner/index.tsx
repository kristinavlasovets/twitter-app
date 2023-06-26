import { FC, memo, useState } from 'react';

import { icons, userBannerText } from '@/constants';
import { useAppSelector } from '@/hooks/useAppSelector';
import { userSelector } from '@/store/slices/userSlice/selectors';
import { createNewPortal } from '@/utils/helpers/createNewPortal';

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

const { MyPhotoSvg } = icons;

const UserBanner: FC<UserBannerProps> = memo((props) => {
  const { photo, name, email, gender, telegram, id } = props;
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
    <Wrapper data-cy="userBannerWrapper">
      <UserInfo>
        <Icon src={photo || MyPhotoSvg} alt={twitterAlt} />
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
        <Button data-cy="editButton" onClick={onHandlerEditProfile}>
          {buttonText}
        </Button>
      )}
      {createNewPortal(
        <UserEditModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />
      )}
    </Wrapper>
  );
});

export default UserBanner;
