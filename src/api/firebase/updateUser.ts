import { doc, updateDoc } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { auth, db } from '@/lib/firebase';
import { UpdateUserPayload } from '@/types';

import { updateDocument } from './updateDocument';
import { updateUserPassword } from './updateUserPassword';

export const updateUser = async ({
  gender,
  name,
  password,
  surname,
  telegram,
}: UpdateUserPayload) => {
  const user = auth.currentUser!;
  const { uid } = user!;

  const updatedInfo: UpdateUserPayload = {};

  if (name) {
    updatedInfo.name = name;
  }
  if (surname) {
    updatedInfo.surname = surname;
  }

  if (telegram) {
    updatedInfo.telegram = telegram;
  }

  if (gender) {
    updatedInfo.gender = gender;
  }

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
