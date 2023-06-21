import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface SideMenuProps {
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
}

export interface MenuWrapperProps {
  isBurgerMenuVisible: boolean;
}
