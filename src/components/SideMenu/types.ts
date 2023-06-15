import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface SideMenuProps {
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
}
