import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { icons, userSearchResultText } from '@/constants';
import { commonTheme } from '@/styles/theme';

import Button from '../Button';

import { Icon, User, UserEmail, UserName, Wrapper } from './styles';
import { UserSearchResultProps } from './types';

const { photoAlt, buttonText } = userSearchResultText;

const { MyPhotoSvg } = icons;

const UserSearchResult: FC<UserSearchResultProps> = memo((props) => {
  const { name, email, photo, id } = props;
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
});

export default UserSearchResult;
