import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { deleteDocument } from '@/api/firebase/deleteDocument';
import { setLikeOnTweet } from '@/api/firebase/setLikeOnTweet';
import { FirebaseCollections, icons } from '@/constants';
import { useAppSelector } from '@/hooks';
import { themeSelector, userIdSelector } from '@/store/slices/userSlice/selectors';
import { checkPath, getTweetCreatedTime } from '@/utils';

import { AppRoutes } from '../AppRouter/types';

import {
  Credentials,
  EditIcon,
  Icon,
  IconWrapper,
  Image,
  ImageIcon,
  ImageWrapper,
  Info,
  LikeCount,
  Name,
  Tweet,
  TweetContentWrapper,
  TweetText,
  Wrapper,
} from './styles';
import { TweetItemProps } from './types';

const {
  MyCloseSvg,
  MyDeleteSvg,
  MyEditSvg,
  MyWhiteEditSvg,
  MyLikeSvg,
  MyWhiteLikeSvg,
  MyPhotoSvg,
  MyRedLikeSvg,
} = icons;

const TweetItem: FC<TweetItemProps> = (props) => {
  const {
    creatorId,
    username,
    email,
    date,
    text,
    likes,
    image,
    photo,
    tweetId,
    setTweets,
    handleGetTweets,
  } = props;

  const [isRemoveVisible, setIsRemoveVisible] = useState(false);

  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, AppRoutes.FEED);

  const currentTheme = useAppSelector(themeSelector);
  const userId = useAppSelector(userIdSelector);

  const isLiked = likes.includes(userId);
  const monthStart = 4;
  const dayEnd = 11;
  const formattedDate = ` · ${new Date(date).toDateString().slice(monthStart, dayEnd)}`;

  const tweetCreatedTime = getTweetCreatedTime(date);

  const handleLikeTweet = async () => {
    await setLikeOnTweet(tweetId, userId);
    handleGetTweets();
  };

  const handleShowRemove = () => {
    setIsRemoveVisible(true);
  };

  const handleDeleteTweet = async () => {
    await deleteDocument(FirebaseCollections.TWEETS, tweetId);
    setTweets((prev) => prev.filter((item) => item.tweetId !== tweetId));
  };

  const handleClose = () => {
    setIsRemoveVisible(false);
  };
  return (
    <Wrapper data-cy="tweetItemWrapper">
      <Icon src={photo || MyPhotoSvg} alt="Photo" />
      <Tweet>
        <TweetContentWrapper>
          <Info>
            <Name>{username}</Name>
            <Credentials>{email}</Credentials>
            <Credentials>{isFeedPath ? tweetCreatedTime : formattedDate}</Credentials>
            {creatorId === userId && (
              <>
                <EditIcon
                  data-cy="editIcon"
                  src={currentTheme === 'dark' ? MyWhiteEditSvg : MyEditSvg}
                  alt="Edit"
                  onClick={handleShowRemove}
                />
                {isRemoveVisible && (
                  <IconWrapper>
                    <ImageIcon
                      data-cy="deleteIcon"
                      src={MyDeleteSvg}
                      alt="Delete Tweet"
                      onClick={handleDeleteTweet}
                    />
                    <ImageIcon
                      data-cy="closeIcon"
                      src={MyCloseSvg}
                      alt="Cancel"
                      onClick={handleClose}
                    />
                  </IconWrapper>
                )}
              </>
            )}
          </Info>
          <TweetText data-cy="tweetItemText">{text}</TweetText>
          {image && (
            <ImageWrapper>
              <Image src={image} />
            </ImageWrapper>
          )}
          <Info>
            <ImageIcon
              data-cy="likeIcon"
              src={
                isLiked ? MyRedLikeSvg : (currentTheme === 'dark' && MyWhiteLikeSvg) || MyLikeSvg
              }
              alt="Like"
              onClick={handleLikeTweet}
            />
            <LikeCount isLiked={isLiked}>{likes.length}</LikeCount>
          </Info>
        </TweetContentWrapper>
      </Tweet>
    </Wrapper>
  );
};

export default TweetItem;
