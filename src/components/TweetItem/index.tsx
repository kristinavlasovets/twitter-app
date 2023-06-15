import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { deleteDocument } from '@/api/firebase/deleteDocument';
import { setLikeOnTweet } from '@/api/firebase/setLikeOnTweet';
import MyCloseSvg from '@/assets/close.svg';
import MyDeleteSvg from '@/assets/delete.svg';
import MyEditSvg from '@/assets/edit.svg';
import MyLikeSvg from '@/assets/like.svg';
import MyRedLikeSvg from '@/assets/like-fill.svg';
import MyPhotoSvg from '@/assets/photo.svg';
import { FirebaseCollections, tweetItemText } from '@/constants/config';
import { useAppSelector } from '@/hooks/useAppSelector';
import { userIdSelector } from '@/store/slices/userSlice/selectors';
import { getTweetCreatedTime } from '@/utils/helpers/getTweetCreatedTime';

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

const TweetItem: FC<TweetItemProps> = ({
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
}) => {
  const [isRemoveVisible, setIsRemoveVisible] = useState(false);
  const location = useLocation();
  const isFeedPath = location.pathname === '/feed';
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
    <Wrapper>
      <Icon src={photo || MyPhotoSvg} alt={photoAlt} />
      <Tweet>
        <TweetContentWrapper>
          <Info>
            <Name>{username}</Name>
            <Credentials>{email}</Credentials>
            <Credentials>{isFeedPath ? tweetCreatedTime : formattedDate}</Credentials>
            {creatorId === userId && (
              <>
                <EditIcon src={MyEditSvg} alt={editAlt} onClick={onHandlerShowRemove} />
                {isRemoveVisible && (
                  <IconWrapper>
                    <ImageIcon src={MyDeleteSvg} alt={deleteAlt} onClick={onHandlerDeleteTweet} />
                    <ImageIcon src={MyCloseSvg} alt={cancelAlt} onClick={onHandlerClose} />
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
              src={isLiked ? MyRedLikeSvg : MyLikeSvg}
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
