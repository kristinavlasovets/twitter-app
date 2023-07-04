import { IUser } from '@/types';

export type UserSearchResultProps = Pick<IUser, 'name' | 'email' | 'photo' | 'id'>;
