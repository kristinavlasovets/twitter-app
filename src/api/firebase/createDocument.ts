import { doc, DocumentData, setDoc, WithFieldValue } from 'firebase/firestore';

import { db } from '@/lib/firebase';

interface CreateDocumentProps {
  collection: string;
  id: string;
  document: WithFieldValue<DocumentData>;
}

export const createDocument = async (options: CreateDocumentProps) => {
  const { collection, id, document } = options;
  await setDoc(doc(db, collection, id), document);
};
