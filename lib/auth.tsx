"use client";
import {
  AuthError,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { IPasswordResetResponse } from "@/types";
import Loader from "@/components/Loader";
import { Dispatch, SetStateAction } from "react";

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

export const doPasswordReset = async (
  email: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<IPasswordResetResponse> => {
  try {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email sent successfully");
    setIsLoading(false);
    return { success: true, message: "Password reset email sent successfully" };
  } catch (error) {
    setIsLoading(false);
    const errorMessage =
      (error as AuthError).code || "An error occurred. Please try again.";
    toast.error(`Error: ${errorMessage}`);
    return { success: false, message: errorMessage };
  }
};

//  export const doPasswordChange = (password)=>{
//     return updatePassword(auth.currentUser,password)
//  }

//  export const doSendEmailVerification = ()=>{
//     return sendEmailVerification(auth.currentUser,{
//         url: `${window.location.origin}/home`
//     })
//  }
