export interface IUser {
  id: string;
  name: string;
  nameLowercase: string;
  phone: string;
  surname: string;
  password: string;
  telegram: string;
  email: string;
  gender: string;
  token: string | undefined;
  photo: string;
}

export type ICreator = Pick<IUser, 'id' | 'email' | 'name' | 'photo'>;

export interface ITweet {
  id?: string;
  tweetId: string;
  creator: ICreator;
  text: string;
  date: number;
  image?: string;
  likes: string[];
}

export interface INewTweet {
  name: string;
  email: string;
  id: string;
  photo: string;
  tweetValue: string;
  image?: File;
}

export type ITweetBySearch = Pick<ITweet, 'text' | 'id'>;

export type UpdateUserProps = Pick<IUser, 'gender' | 'name' | 'password' | 'surname' | 'telegram'>;
