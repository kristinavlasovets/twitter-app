import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { FirebaseCollections } from '@/constants';
import { storage } from '@/lib/firebase';

import { updateDocument } from './updateData';

type TFile = Blob | Uint8Array | ArrayBuffer;

interface UploadFileProps {
  file: TFile;
  id: string;
  collection: FirebaseCollections;
}

export const uploadFile = async (options: UploadFileProps) => {
  const { collection, file, id } = options;
  const storageRef = ref(storage, id);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    'state_changed',
    () => {},
    () => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateDocument({
          collection,
          id,
          newDoc: { image: downloadURL },
        });
      });
    }
  );
};
