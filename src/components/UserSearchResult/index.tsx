import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { userSearchResultText } from '@/constants/config/components';
import { icons } from '@/constants/icons';
import { commonTheme } from '@/styles/theme';

import Button from '../Button';

import { Icon, User, UserEmail, UserName, Wrapper } from './styles';
import { UserSearchResultProps } from './types';

const { photoAlt, buttonText } = userSearchResultText;

const { MyPhotoSvg } = icons;

const UserSearchResult: FC<UserSearchResultProps> = ({ name, email, photo, id }) => {
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
        width={commonTheme.width.m}
        height={commonTheme.height.ss}
        backgroundColor={commonTheme.colors.BLACK}
        fontSize={commonTheme.fontSizes.xxxs}
        color={commonTheme.colors.WHITE}
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default UserSearchResult;
