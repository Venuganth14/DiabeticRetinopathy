// lib/firebaseUtils.ts
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { storage, db } from './firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

export async function updateNgrokUrl(url: string) {
  await setDoc(doc(db, 'config', 'ngrok'), { url });
}

export async function fetchNgrokUrl(): Promise<string> {
  const docRef = doc(db, 'config', 'ngrok');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().url as string;
  } else {
    throw new Error('No ngrok URL found');
  }
}

export async function uploadImage(file: File) {
  const storageRef = ref(storage, 'images/' + file.name);
  await uploadBytes(storageRef, file);
}

export async function analyzeImage(file: File) {
  const url = await fetchNgrokUrl();
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${url}/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to analyze image');
  }

  const result = await response.json();
  return result;
}
