"use client";

import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { firebaseAuth } from "@/functions/firebase/firebaseConfig";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/functions/Context";

export default function Login() {
  const user = useContext(UserContext);
  const router = useRouter();

  const handleLogin = () => {
    if (user) {
      router.push("/talk");
    } else {
      router.push("/login-redirect");
    }
  };

  // useEffect(() => {
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       console.log("result:", result);
  //       if (!result) return;
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken;
  //       console.log("token:", token);
  //
  //       // The signed-in user info.
  //       const user = result.user;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
