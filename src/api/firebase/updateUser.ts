import { doc, updateDoc } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { auth, db } from '@/lib/firebase';
import { UpdateUserProps } from '@/types';

import { updateDocument } from './updateDocument';
import { updateUserPassword } from './updateUserPassword';

export const updateUser = async ({
  gender,
  name,
  password,
  surname,
  telegram,
}: UpdateUserProps) => {
  const user = auth.currentUser!;
  const { uid } = user!;
  const udpatedNameLowercase = name.toLowerCase();

  if (!telegram.includes('@')) {
    telegram = `@${telegram}`;
  }

  const updatedInfo = { gender, name, nameLowercase: udpatedNameLowercase, surname, telegram };

  await updateDoc(doc(db, FirebaseCollections.USERS, uid), updatedInfo);

  if (password) {
    await updateUserPassword(password);
    await updateDocument({
      collection: FirebaseCollections.USERS,
      id: uid,
      newDoc: { password },
    });
  }
};
