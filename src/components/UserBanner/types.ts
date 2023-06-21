import { IUser } from '@/types';

export type UserBannerProps = Omit<IUser, 'token' | 'password' | 'nameLowercase'>;
