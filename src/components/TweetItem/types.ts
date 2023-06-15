import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface TweetItemProps {
  tweetId: string;
  creatorId: string;
  username: string;
  photo?: string;
  email: string;
  date: number;
  text: string;
  likes: string[];
  image?: string;

  setTweets: Dispatch<SetStateAction<ITweet[]>>;
  onHandlerGetTweets: () => void;
}

export interface LikeCountProps {
  isLiked: boolean;
}
