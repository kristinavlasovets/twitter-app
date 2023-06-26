import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { deleteDocument } from '@/api/firebase/deleteDocument';
import { setLikeOnTweet } from '@/api/firebase/setLikeOnTweet';
import { FirebaseCollections, icons, tweetItemText } from '@/constants';
import { useAppSelector } from '@/hooks/useAppSelector';
import { themeSelector, userIdSelector } from '@/store/slices/userSlice/selectors';
import { checkPath } from '@/utils/helpers/checkPath';
import { getTweetCreatedTime } from '@/utils/helpers/getTweetCreatedTime';

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

const { photoAlt, editAlt, deleteAlt, cancelAlt, likeAlt } = tweetItemText;

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
    onHandlerGetTweets,
  } = props;
  const [isRemoveVisible, setIsRemoveVisible] = useState(false);
  const { pathname } = useLocation();
  const currentTheme = useAppSelector(themeSelector);
  const isFeedPath = checkPath(pathname, AppRoutes.FEED);
  const userId = useAppSelector(userIdSelector);
  const isLiked = likes.includes(userId);
  const monthStart = 4;
  const dayEnd = 11;
  const formattedDate = ` · ${new Date(date).toDateString().slice(monthStart, dayEnd)}`;

  const tweetCreatedTime = getTweetCreatedTime(date);

  const onHandlerLikeTweet = async () => {
    await setLikeOnTweet(tweetId, userId);
    onHandlerGetTweets();
  };

  const onHandlerShowRemove = () => {
    setIsRemoveVisible(true);
  };

  const onHandlerDeleteTweet = async () => {
    await deleteDocument(FirebaseCollections.TWEETS, tweetId);
    setTweets((prev) => prev.filter((item) => item.tweetId !== tweetId));
  };

  const onHandlerClose = () => {
    setIsRemoveVisible(false);
  };
  return (
    <Wrapper data-cy="tweetItemWrapper">
      <Icon src={photo || MyPhotoSvg} alt={photoAlt} />
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
                  alt={editAlt}
                  onClick={onHandlerShowRemove}
                />
                {isRemoveVisible && (
                  <IconWrapper>
                    <ImageIcon
                      data-cy="deleteIcon"
                      src={MyDeleteSvg}
                      alt={deleteAlt}
                      onClick={onHandlerDeleteTweet}
                    />
                    <ImageIcon
                      data-cy="closeIcon"
                      src={MyCloseSvg}
                      alt={cancelAlt}
                      onClick={onHandlerClose}
                    />
                  </IconWrapper>
                )}
              </>
            )}
          </Info>
          <TweetText>{text}</TweetText>
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
              alt={likeAlt}
              onClick={onHandlerLikeTweet}
            />
            <LikeCount isLiked={isLiked}>{likes.length}</LikeCount>
          </Info>
        </TweetContentWrapper>
      </Tweet>
    </Wrapper>
  );
};

export default TweetItem;
