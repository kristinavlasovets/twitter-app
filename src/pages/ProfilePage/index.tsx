import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getDocument, getTweetsById, getTweetsBySearch } from '@/api/firebase/getData';
import MyBanner from '@/assets/profile-banner.png';
import Alert from '@/components/Alert';
import CreateTweetBlock from '@/components/CreateTweetBlock';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import SideSearch from '@/components/SideSearch';
import TweetItem from '@/components/TweetItem';
import UserBanner from '@/components/UserBanner';
import { FirebaseCollections, tweetField } from '@/constants';
import { ITweet, IUser } from '@/types';

import { Banner, MainWrapper, Title, Wrapper } from './styles';

const ProfilePage: FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const { pathname } = useLocation();
  const pathNameIndex = 2;
  const pathId = pathname.split('/')[pathNameIndex];

  const handleGetUser = async () => {
    const currentUser = (await getDocument(FirebaseCollections.USERS, pathId)) as IUser | false;
    if (currentUser) setUser(currentUser);
  };

  const handleGetUserTweets = async () => {
    const result = await getTweetsById(tweetField.creatorId, pathId);
    setTweets(result);
  };

  useEffect(() => {
    handleGetUser();
    handleGetUserTweets();
  }, [pathId]);

  const { photo, email, gender, name, phone, telegram, id, surname } = user;

  return (
    <Wrapper>
      <SideMenu setTweets={setTweets} />
      <MainWrapper>
        <Header tweetsCount={tweets.length} />
        <Banner src={MyBanner} alt="Profile Banner" />
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
              handleGetTweets={handleGetUserTweets}
            />
          ))}
      </MainWrapper>
      <SideSearch
        placeholder="Search Tweets"
        getData={getTweetsBySearch}
        errorMessage="Tweet not found"
      />
      <Alert />
    </Wrapper>
  );
};

export default ProfilePage;
