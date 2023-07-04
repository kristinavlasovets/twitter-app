import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/lib/firebase';

export const deleteDocument = async (collection: string, prop: string) => {
  await deleteDoc(doc(db, collection, prop));
};
