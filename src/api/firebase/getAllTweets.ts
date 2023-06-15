import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { db } from '@/lib/firebase';
import { ITweet } from '@/types';

export const getAllTweets = async () => {
  const q = query(collection(db, FirebaseCollections.TWEETS), orderBy('date', 'desc'));

  const querySnapshot = await getDocs(q);

  const allTweets = querySnapshot.docs.map((doc) => {
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

  return allTweets;
};
