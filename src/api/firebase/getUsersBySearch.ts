import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { db } from '@/lib/firebase';
import { IUser } from '@/types';

export const getUsersBySearch = async (searchValue: string) => {
  const q = query(
    collection(db, FirebaseCollections.USERS),
    orderBy('nameLowercase', 'asc'),
    where('nameLowercase', '>=', searchValue.toLowerCase()),
    where('nameLowercase', '<=', `${searchValue.toLowerCase()}\uf8ff`)
  );

  const querySnapshot = await getDocs(q);

  const usersBySearch = querySnapshot.docs.map((doc) => {
    const { name, email, photo } = doc.data() as IUser;
    return {
      id: doc.id,
      name,
      email,
      photo,
    };
  });

  return usersBySearch;
};
