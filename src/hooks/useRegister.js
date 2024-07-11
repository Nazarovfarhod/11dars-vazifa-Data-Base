import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
//import react
import { useState } from "react";

//context
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();

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

  return { registerWithGoogle, isPending };
};
