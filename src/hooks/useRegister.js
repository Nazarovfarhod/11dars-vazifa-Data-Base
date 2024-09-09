import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
//import react
import { useState } from "react";

//context
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();

  //register with google
  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIsPending(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Welcome, ${user.displayName}`);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      console.log(error.message);
      setIsPending(false);
    }
  };

  //register with email and password
  const registerEmailAndPassword = async ({
    email,
    password,
    displayName,
    photoURL,
    confirmPassword,
  }) => {
    try {
      if (confirmPassword !== password) {
        throw new Error("Passwords did not match");
      }
      const register = createUserWithEmailAndPassword(auth, email, password);
      const userCredential = (await register).user;
      await updateProfile(auth.currentUser, {
        photoURL,
        displayName,
      });

      console.log(user);

      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Welcome, ${user.displayName}`);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return { registerWithGoogle, isPending, registerEmailAndPassword };
};
