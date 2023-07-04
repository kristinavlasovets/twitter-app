import { IUser } from '@/types';

export interface UserEditModalProps {
  isModalVisible: boolean;
  onClose: () => void;
}

export type UserEditProps = Pick<
  IUser,
  'id' | 'surname' | 'name' | 'gender' | 'telegram' | 'password'
>;
