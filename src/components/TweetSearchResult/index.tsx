import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { tweetSearchResultText } from '@/constants';
import { commonTheme } from '@/styles/theme';

import Button from '../Button';

import { User, UserName, Wrapper } from './styles';
import { TweetSearchResultProps } from './types';

const { buttonText } = tweetSearchResultText;

const TweetSearchResult: FC<TweetSearchResultProps> = memo((props) => {
  const { id, text } = props;
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
        width={commonTheme.width.ss}
        height={commonTheme.height.ss}
        backgroundColor={commonTheme.colors.RED}
        fontSize={commonTheme.fontSizes.xxs}
        color={commonTheme.colors.WHITE}
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
});

export default TweetSearchResult;
