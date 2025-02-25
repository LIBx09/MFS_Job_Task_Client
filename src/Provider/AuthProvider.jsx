/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Google = new GoogleAuthProvider();

  const createUser = (email, pin) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pin);
  };

  const login = (identifier, pin) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, identifier, pin);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, Google);
  };

  const logout = () => {
    setLoading(true);
    signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleLogin,
    logout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
