import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as _signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signIn = async () => {
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    return userCredentials.user;
  } catch (err) {
    console.log(err.message);
  }
};

export const signOut = async () => {
  _signOut(auth);
};

export const handleAuthChange = async (callback) => {
  const unSubscribe = await onAuthStateChanged(auth, callback);
  return unSubscribe;
};
