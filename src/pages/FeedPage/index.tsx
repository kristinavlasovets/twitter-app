import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getAllTweets } from '@/api/firebase/getAllTweets';
import { getUsersBySearch } from '@/api/firebase/getUsersBySearch';
import Alert from '@/components/Alert';
import CreateTweetBlock from '@/components/CreateTweetBlock';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import SideSearch from '@/components/SideSearch';
import TweetItem from '@/components/TweetItem';
import UserSearchResult from '@/components/UserSearchResult';
import { feedPageText } from '@/constants/config';
import { ITweet } from '@/types';

import { MainWrapper, Title, Wrapper } from './styles';

const { sideTitle, userError, zeroLength, title } = feedPageText;

const FeedPage: FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { pathname } = useLocation();
  const pathNameIndex = 2;
  const pathId = pathname.split('/')[pathNameIndex];

  const onHandlerGetTweets = async () => {
    const result = await getAllTweets();
    setTweets(result);
  };

  useEffect(() => {
    onHandlerGetTweets();
  }, []);

  const tweetBySearch = tweets.filter((item) => item.id === pathId) as ITweet[];

  return (
    <Wrapper>
      <SideMenu setTweets={setTweets} />
      <MainWrapper>
        <Header />
        {pathId === ':id' ? (
          <>
            <CreateTweetBlock setTweets={setTweets} />
            <Title>{title}</Title>
            {tweets.length > zeroLength &&
              tweets.map(({ date, text, image, likes, tweetId, creator }) => (
                <TweetItem
                  key={tweetId}
                  tweetId={tweetId}
                  creatorId={creator?.id}
                  username={creator?.name}
                  email={creator?.email}
                  photo={creator?.photo}
                  date={date}
                  text={text}
                  image={image}
                  likes={likes}
                  setTweets={setTweets}
                  onHandlerGetTweets={onHandlerGetTweets}
                />
              ))}
          </>
        ) : (
          tweetBySearch.length > zeroLength &&
          tweetBySearch.map(({ date, text, image, likes, tweetId, creator }) => (
            <TweetItem
              key={tweetId}
              tweetId={tweetId}
              creatorId={creator?.id}
              username={creator?.name}
              email={creator?.email}
              photo={creator?.photo}
              date={date}
              text={text}
              image={image}
              likes={likes}
              setTweets={setTweets}
              onHandlerGetTweets={onHandlerGetTweets}
            />
          ))
        )}
      </MainWrapper>
      <SideSearch
        placeholder={sideTitle}
        getData={getUsersBySearch}
        Result={UserSearchResult}
        errorMessage={userError}
      />
      <Alert />
    </Wrapper>
  );
};

export default FeedPage;
