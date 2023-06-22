import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/config';
import { db } from '@/lib/firebase';
import { ITweet, IUser } from '@/types';

export const getDocument = async (collection: string, prop: string) => {
  const docSnapshot = await getDoc(doc(db, collection, prop));

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }
  return false;
};

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
