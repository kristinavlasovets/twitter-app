import MyBookmarkSvg from '@/assets/bookmarks.svg';
import MyExploreSvg from '@/assets/explore.svg';
import MyHomeSvg from '@/assets/home-outline.svg';
import MyListSvg from '@/assets/lists.svg';
import MyMessageSvg from '@/assets/messages.svg';
import MyMoreSvg from '@/assets/more.svg';
import MyNotificationSvg from '@/assets/notification.svg';
import MyProfileSvg from '@/assets/profile-fill.svg';
import { AppRoutes } from '@/components/AppRouter/types';

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
  },
  {
    text: ' Explore',
    to: '#',
    src: MyExploreSvg,
  },
  {
    text: ' Notifications',
    to: '#',
    src: MyNotificationSvg,
  },
  {
    text: ' Messages',
    to: '#',
    src: MyMessageSvg,
  },
  {
    text: ' Bookmarks',
    to: '#',
    src: MyBookmarkSvg,
  },
  {
    text: ' Lists',
    to: '#',
    src: MyListSvg,
  },
  {
    text: ' Profile',
    to: AppRoutes.PROFILE,
    src: MyProfileSvg,
  },
  {
    text: ' More',
    to: '#',
    src: MyMoreSvg,
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

export const headerText = {
  inputType: 'checkbox',
  title: 'Home',
  text: ' Tweets',
  backAlt: 'Go back Home',
};

export const userBannerText = {
  buttonText: 'Edit profile',
  twitterAlt: 'Twitter Logo',
  followingText: 'Following',
  followersText: 'Followers',
  followingCount: 67,
  followersCount: 47,
};

export const userEditModalText = {
  buttonText: 'Edit profile',
  title: 'Change User Data',
  cancelAlt: 'Cancel',
  nameText: 'Name',
  surnameText: 'Surname',
  telegramText: 'Telegram',
  genderText: 'Gender',
  passwordText: 'Password',
  minLengthValue: 5,
  maxLengthValue: 15,
};

export const createTweetBlockText = {
  buttonText: 'Tweet',
  photoAlt: 'Photo',
  imageAlt: 'Image',
  cancelAlt: 'Cancel',
  textAreaPlaceholder: "What's happening",
  fileType: 'file',
};

export const sideMenuText = {
  tweetButtonText: 'Tweet',
  logoutButtonText: 'Log out',
  twitterAlt: 'Twitter Logo',
};

export const userSearchResultText = {
  photoAlt: 'Photo',
  buttonText: 'Follow',
};

export const tweetSearchResultText = {
  buttonText: 'Read',
};

export const tweetItemText = {
  photoAlt: 'Photo',
  editAlt: 'Edit',
  deleteAlt: 'Delete Tweet',
  cancelAlt: 'Cancel',
  likeAlt: 'Like',
};

export const homePageText = {
  bannerAlt: 'Twitter Banner',
  twitterLogoAlt: 'Twitter Logo',
  googleLogoAlt: 'Google Logo',
  title: 'Happening now',
  subTitle: 'Join Twitter today',
  signUpGoogleText: 'Sign up with Google',
  signUpEmailText: 'Sign up with email',
  termsText: 'By singing up you agree to the',
  termsOne: ' and',
  termsTwo: ' ,including',
  termsThree: '.',
  question: 'Already have an account?',
  loginText: ' Log in',
  copyrightText: '© 2021 Twitter, Inc.',
  navLinks: [
    {
      name: ' About',
      to: '#',
    },
    {
      name: ' Help Center',
      to: '#',
    },
    {
      name: ' Terms of Service',
      to: '#',
    },
    {
      name: ' Privacy Policy',
      to: '#',
    },
    {
      name: ' Cookie Policy',
      to: '#',
    },
    {
      name: ' Ads info',
      to: '#',
    },
    {
      name: ' Blog',
      to: '#',
    },
    {
      name: ' Status',
      to: '#',
    },
    {
      name: ' Carrres',
      to: '#',
    },
    {
      name: ' Brand Resources',
      to: '#',
    },
    {
      name: ' Advertsing',
      to: '#',
    },
    {
      name: ' Marketing',
      to: '#',
    },
    {
      name: ' Twitter for Business',
      to: '#',
    },
    {
      name: ' Developers',
      to: '#',
    },
    {
      name: ' Directory',
      to: '#',
    },
    {
      name: ' Settings',
      to: '#',
    },
  ],
};

export const loginPageText = {
  title: 'Log in to Twitter',
  twitterLogoAlt: 'Twitter Logo',
  emailPlaceholder: 'Email address',
  emailType: 'text',
  passwordPlaceholder: 'Password',
  passwordType: 'password',
  buttonText: 'Log In',
  linkText: 'Sign up to Twitter',
};
export const signUpPageText = {
  title: 'Create an account',
  subTitle: 'Date of birth',
  twitterLogoAlt: 'Twitter Logo',
  namePlaceholder: 'Name',
  phonePlaceholder: 'Phone Number',
  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Password',
  textType: 'text',
  emailType: 'email',
  passwordType: 'password',
  buttonText: 'Next',
  linkText: 'Use email',
  infoText: `Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id
  ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
  congue.`,
  minLengthValue: 5,
  maxLengthValue: 15,
};

export const profilePageText = {
  bannerAlt: 'Profile Banner',
};

export const feedPageText = {
  title: 'Tweets',
  sideTitle: 'Search Users',
  userError: 'User not found',
  zeroLength: 0,
};

export const sideSearchText = {
  title: 'You might like',
  link: 'Show more',
  searchIconAlt: 'Search users',
  copyrightText: '© 2021 Twitter, Inc.',
  navLinks: [
    {
      name: ' Terms of Service',
      to: '#',
    },
    {
      name: ' Privacy Policy',
      to: '#',
    },
    {
      name: ' Cookie Policy',
      to: '#',
    },
    {
      name: ' Imprint',
      to: '#',
    },
    {
      name: ' Ads info',
      to: '#',
    },

    {
      name: ' More...',
      to: '#',
    },
  ],
};
