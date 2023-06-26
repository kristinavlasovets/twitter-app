import { v4 } from 'uuid';

import { createDocument } from '@/api/firebase/createDocument';
import { uploadFile } from '@/api/firebase/uploadFile';
import { FirebaseCollections } from '@/constants';
import { INewTweet } from '@/types';

export const createNewTweet = async (options: INewTweet) => {
  const { email, id, image, name, photo, tweetValue } = options;
  const tweet = {
    tweetId: v4(),
    creator: { name, email, id, photo },
    text: tweetValue,
    date: Date.now(),
    image: '',
    likes: [],
  };

  await createDocument({
    collection: FirebaseCollections.TWEETS,
    id: tweet.tweetId,
    document: tweet,
  });

  if (image) {
    await uploadFile({
      collection: FirebaseCollections.TWEETS,
      id: tweet.tweetId,
      file: image,
    });

    const url = URL.createObjectURL(image);

    tweet.image = url;
  }

  return tweet;
};
