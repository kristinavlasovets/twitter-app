import { Dispatch, SetStateAction } from 'react';

import { IUser } from '@/types';

export interface UserEditModalProps {
  isModalVisible?: boolean;
  setIsModalVisible?: Dispatch<SetStateAction<boolean>>;
}

export type UserEditProps = Pick<
  IUser,
  'id' | 'surname' | 'name' | 'gender' | 'telegram' | 'password'
>;
