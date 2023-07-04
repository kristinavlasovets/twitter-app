import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export const signUpWithEmail = async (email: string, password: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
