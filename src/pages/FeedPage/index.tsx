import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllTweets, getUsersBySearch } from '@/api/firebase/getData';
import Alert from '@/components/Alert';
import CreateTweetBlock from '@/components/CreateTweetBlock';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import SideSearch from '@/components/SideSearch';
import TweetItem from '@/components/TweetItem';
import { feedPageText } from '@/constants';
import { ITweet } from '@/types';

import { MainWrapper, Title, Wrapper } from './styles';

const { sideTitle, userError, title } = feedPageText;

const FeedPage: FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const params = useParams();

  const handleGetTweets = async () => {
    const result = await getAllTweets();
    setTweets(result);
  };

  useEffect(() => {
    handleGetTweets();
  }, []);

  const tweetBySearch = tweets.filter((item) => item.id === params?.id) as ITweet[];

  return (
    <Wrapper>
      <SideMenu setTweets={setTweets} />
      <MainWrapper>
        <Header />
        {!params?.id ? (
          <>
            <CreateTweetBlock setTweets={setTweets} />
            <Title>{title}</Title>
            {tweets.length > 0 &&
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
                  handleGetTweets={handleGetTweets}
                />
              ))}
          </>
        ) : (
          tweetBySearch.length > 0 &&
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
              handleGetTweets={handleGetTweets}
            />
          ))
        )}
      </MainWrapper>
      <SideSearch placeholder={sideTitle} getData={getUsersBySearch} errorMessage={userError} />
      <Alert />
    </Wrapper>
  );
};

export default FeedPage;
