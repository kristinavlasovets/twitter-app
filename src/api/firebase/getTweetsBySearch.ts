import { collection, getDocs, query, where } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { db } from '@/lib/firebase';
import { ITweet } from '@/types';

export const getTweetsBySearch = async (searchValue: string) => {
  const q = query(
    collection(db, FirebaseCollections.TWEETS),
    where('text', '>=', searchValue),
    where('text', '<=', `${searchValue}\uf8ff`)
  );

  const querySnapshot = await getDocs(q);

  const tweetsBySearch = querySnapshot.docs.map((doc) => {
    const { text, date, creator, image, likes } = doc.data() as ITweet;
    return {
      id: doc.id,
      text,
      date,
      creator,
      image,
      likes,
    };
  });

  return tweetsBySearch;
};
