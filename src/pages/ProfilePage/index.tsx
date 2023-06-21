import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getDocument } from '@/api/firebase/getDocument';
import { getTweetsById } from '@/api/firebase/getTweetsById';
import { getTweetsBySearch } from '@/api/firebase/getTweetsBySearch';
import MyBanner from '@/assets/profile-banner.png';
import Alert from '@/components/Alert';
import CreateTweetBlock from '@/components/CreateTweetBlock';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import SideSearch from '@/components/SideSearch';
import TweetItem from '@/components/TweetItem';
import TweetSearchResult from '@/components/TweetSearchResult';
import UserBanner from '@/components/UserBanner';
import { FirebaseCollections, tweetField } from '@/constants/config';
import { profilePageText } from '@/constants/config/pages';
import { ITweet, IUser } from '@/types';

import { Banner, MainWrapper, Title, Wrapper } from './styles';

const { bannerAlt } = profilePageText;

const ProfilePage: FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { pathname } = useLocation();
  const pathNameIndex = 2;
  const pathId = pathname.split('/')[pathNameIndex];
  const zeroLength = 0;

  const onHandlerGetUser = async () => {
    const currentUser = (await getDocument(FirebaseCollections.USERS, pathId)) as IUser | false;
    if (currentUser) setUser(currentUser);
  };

  const onHandlerGetUserTweets = async () => {
    const result = await getTweetsById(tweetField.creatorId, pathId);
    setTweets(result);
  };

  useEffect(() => {
    onHandlerGetUser();
    onHandlerGetUserTweets();
  }, [pathId]);

  const { photo, email, gender, name, phone, telegram, id, surname } = user;

  return (
    <Wrapper>
      <SideMenu setTweets={setTweets} />
      <MainWrapper>
        <Header tweetsCount={tweets.length} />
        <Banner src={MyBanner} alt={bannerAlt} />
        <UserBanner
          photo={photo}
          email={email}
          gender={gender}
          name={name}
          phone={phone}
          telegram={telegram}
          id={id}
          surname={surname}
        />
        <CreateTweetBlock setTweets={setTweets} />
        <Title>Tweets</Title>
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
              onHandlerGetTweets={onHandlerGetUserTweets}
            />
          ))}
      </MainWrapper>
      <SideSearch
        placeholder="Search Tweets"
        getData={getTweetsBySearch}
        Result={TweetSearchResult}
        errorMessage="Tweet not found"
      />
      <Alert />
    </Wrapper>
  );
};

export default ProfilePage;
