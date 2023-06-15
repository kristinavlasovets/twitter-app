import { updatePassword } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export const updateUserPassword = async (password: string) => {
  const user = auth.currentUser;
  if (user && password) {
    await updatePassword(user, password);
  }
};
