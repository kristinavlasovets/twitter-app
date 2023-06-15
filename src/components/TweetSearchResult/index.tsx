import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { tweetSearchResultText } from '@/constants/config';

import Button from '../Button';

import { User, UserName, Wrapper } from './styles';
import { TweetSearchResultProps } from './types';

const { buttonText } = tweetSearchResultText;

const TweetSearchResult: FC<TweetSearchResultProps> = ({ id, text }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onHandlerNavigate = () => {
    navigate(`/feed/${id}`);
  };

  return (
    <Wrapper>
      <User>
        <UserName>{text}</UserName>
      </User>
      <Button
        onClick={onHandlerNavigate}
        width={theme?.width.ss}
        height={theme?.height.ss}
        backgroundColor={theme?.colors.RED}
        fontSize={theme?.fontSizes.xxs}
        color={theme?.colors.WHITE}
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default TweetSearchResult;
