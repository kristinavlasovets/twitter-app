import { updatePassword } from 'firebase/auth';
import { doc, DocumentData, updateDoc, WithFieldValue } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants';
import { auth, db } from '@/lib/firebase';
import { UpdateUserProps } from '@/types';

interface UpdateDocumentProps {
  collection: string;
  id: string;
  newDoc: WithFieldValue<DocumentData>;
}

export const updateDocument = async (options: UpdateDocumentProps) => {
  const { collection, newDoc, id } = options;
  const docRef = doc(db, collection, id);
  await updateDoc(docRef, newDoc);
};

export const updateUserPassword = async (password: string) => {
  const user = auth.currentUser;
  if (user && password) {
    await updatePassword(user, password);
  }
};

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
