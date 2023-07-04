import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { FirebaseCollections, tweetField } from '@/constants';
import { db } from '@/lib/firebase';

import { getTweetsById } from './getData';

export const setLikeOnTweet = async (tweetId: string, userId: string) => {
  const tweet = await getTweetsById(tweetField.tweetId, tweetId);
  const tweetRef = doc(db, FirebaseCollections.TWEETS, tweetId);
  if (tweet[0].likes.includes(userId)) {
    await updateDoc(tweetRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(tweetRef, {
      likes: arrayUnion(userId),
    });
  }
};
