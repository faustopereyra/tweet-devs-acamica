import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as _signOut,
} from "firebase/auth";
import { setDocument, getDataById } from "./CRUDops";

const provider = new GoogleAuthProvider();

const addUserToFirestore = async (user) => {
  const { id, displayName, email, photoURL } = user;
  const userExist = await getDataById("users", id);
  if (!userExist) {
    await setDocument("users", id, {
      name: displayName,
      email: email,
      photo: photoURL,
    });
  }
};

export const signIn = async () => {
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    await addUserToFirestore(userCredentials.user);
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
