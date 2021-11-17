import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const getDocRef = (col, id) => doc(db, col, id);

const getCollectionRef = (col) => collection(db, col);

//get data
export const getData = async (col) => {
  const collectionRef = getCollectionRef(col);
  const snapData = await getDocs(collectionRef);
  const data = snapData.map((doc) => doc.data());
  return data;
};
//set data
export const setData = async (col, data) => {
  const collectionRef = getCollectionRef(col);
  const docRef = await addDoc(collectionRef, data);
  return docRef;
};

//update data
export const updateData = async (col, id, data) => {
  const docRef = getDocRef(col, id);
  await updateDoc(docRef, data);
};

//dalete data
export const deleteData = async (col, id) => {
  const docRef = getDocRef(col, id);
  await deleteDoc(docRef);
};

//subscribe to data
export const getSubscription = async (col, callback) => {
  const collectionRef = getCollectionRef(col);
  //const unsubscribe = onSnapshot(collectionRef, callback);
  const unsubscribe = await onSnapshot(collectionRef, callback);
  return unsubscribe;
};
