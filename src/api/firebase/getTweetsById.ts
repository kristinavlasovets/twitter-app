import { collection, getDocs, query, where } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { db } from '@/lib/firebase';
import { ITweet } from '@/types';

export const getTweetsById = async (field: string, id: string) => {
  const q = query(collection(db, FirebaseCollections.TWEETS), where(field, '==', id));

  const querySnapshot = await getDocs(q);

  const tweetsById = querySnapshot.docs.map((doc) => {
    const { text, date, creator, image, likes, tweetId } = doc.data() as ITweet;
    return {
      id: doc.id,
      tweetId,
      text,
      date,
      creator,
      image,
      likes,
    };
  });

  return tweetsById;
};
