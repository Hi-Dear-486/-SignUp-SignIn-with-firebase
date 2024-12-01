"use client";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (
  email: any,
  password: any
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

//  export doPasswordReset = (email)=>{
// return sendPasswordResetEmail(auth,email)
//  }

//  export const doPasswordChange = (password)=>{
//     return updatePassword(auth.currentUser,password)
//  }

//  export const doSendEmailVerification = ()=>{
//     return sendEmailVerification(auth.currentUser,{
//         url: `${window.location.origin}/home`
//     })
//  }
