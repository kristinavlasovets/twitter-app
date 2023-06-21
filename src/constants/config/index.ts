import { AppRoutes } from '@/components/AppRouter/types';

import { icons } from '../icons';

const {
  MyHomeSvg,
  MyWhiteHomeSvg,
  MyMessageSvg,
  MyWhiteMessageSvg,
  MyExploreSvg,
  MyWhiteExploreSvg,
  MyNotificationSvg,
  MyWhiteNotificationSvg,
  MyMoreSvg,
  MyWhiteMoreSvg,
  MyProfileSvg,
  MyWhiteProfileSvg,
  MyBookmarkSvg,
  MyWhiteBookmarkSvg,
  MyListSvg,
  MyWhiteListSvg,
} = icons;

export const validationPatterns = {
  namePattern: /^[A-Za-z]+$/i,
  phonePattern: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
};

export const validationErrors = {
  nameError: 'Invalid username.',
  surnameError: 'Invalid surname.',
  phoneError:
    ' Invalid phone format. Valid formats: (123) 456-7890 (123)456-7890 123-456-7890 123.456.7890 1234567890 +31636363634 075-63546725',
  emailError: 'Invalid email format.',
  passwordError: 'Invalid password. Should be between 5 and 15 symbols.',
};

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const tweetField = {
  creatorId: 'creator.id',
  tweetId: 'tweetId',
};

export const menuItems = [
  {
    text: ' Home',
    to: AppRoutes.FEED,
    src: MyHomeSvg,
    srcAlt: MyWhiteHomeSvg,
  },
  {
    text: ' Explore',
    to: AppRoutes.EXPLORE,
    src: MyExploreSvg,
    srcAlt: MyWhiteExploreSvg,
  },
  {
    text: ' Notifications',
    to: AppRoutes.NOTIFICATIONS,
    src: MyNotificationSvg,
    srcAlt: MyWhiteNotificationSvg,
  },
  {
    text: ' Messages',
    to: AppRoutes.MESSAGES,
    src: MyMessageSvg,
    srcAlt: MyWhiteMessageSvg,
  },
  {
    text: ' Bookmarks',
    to: AppRoutes.BOOKMARKS,
    src: MyBookmarkSvg,
    srcAlt: MyWhiteBookmarkSvg,
  },
  {
    text: ' Lists',
    to: AppRoutes.LISTS,
    src: MyListSvg,
    srcAlt: MyWhiteListSvg,
  },
  {
    text: ' Profile',
    to: AppRoutes.PROFILE,
    src: MyProfileSvg,
    srcAlt: MyWhiteProfileSvg,
  },
  {
    text: ' More',
    to: AppRoutes.MORE,
    src: MyMoreSvg,
    srcAlt: MyWhiteMoreSvg,
  },
];

export enum FirebaseCollections {
  USERS = 'users',
  TWEETS = 'tweets',
}

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
}

export const defaultValueUserSignUp = {
  defaultName: 'My Name',
  defaultSurname: 'My Surname',
  defaultEmail: 'myemail@gmail.com',
  defaultPhoto: '',
  defaultTelegram: '@mytelegram',
  defaultPhone: '+8796524831305',
  defaultPassword: 'no-password',
  defaultMonth: 'July',
  defaultDay: '2',
  defaultYear: '2000',
  defaultToken: '',
};

export const deafaultAlertValue = {
  isVisible: false,
  message: '',
};

export enum ErrorBoundaryText {
  message = 'Something went wrong.',
}
