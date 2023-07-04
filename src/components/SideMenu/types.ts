import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface SideMenuProps {
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
  isMenuModalVisible?: boolean;
  setIsMenuModalVisible?: Dispatch<SetStateAction<boolean>>;
}

export interface MenuWrapperProps {
  isBurgerMenuVisible?: boolean;
  isModal?: boolean;
}
