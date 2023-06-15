import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import MyPhotoSvg from '@/assets/photo.svg';
import { userSearchResultText } from '@/constants/config';

import Button from '../Button';

import { Icon, User, UserEmail, UserName, Wrapper } from './styles';
import { UserSearchResultProps } from './types';

const { photoAlt, buttonText } = userSearchResultText;

const UserSearchResult: FC<UserSearchResultProps> = ({ name, email, photo, id }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onHandlerNavigate = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <Wrapper>
      <Icon src={photo || MyPhotoSvg} alt={photoAlt} onClick={onHandlerNavigate} />
      <User>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </User>
      <Button
        onClick={onHandlerNavigate}
        width={theme?.width.m}
        height={theme?.height.ss}
        backgroundColor={theme?.colors.BLACK}
        fontSize={theme?.fontSizes.xxxs}
        color={theme?.colors.WHITE}
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default UserSearchResult;
