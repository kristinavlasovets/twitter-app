import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface CreateTweetBlockProps {
  isModal?: boolean;
  isModalVisible?: boolean;

  setIsModalVisible?: Dispatch<SetStateAction<boolean>>;
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
}

export interface WrapperProps {
  isModal?: boolean;
}
