"use client";

import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth } from "@/functions/firebase";
import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function LoginRedirect() {
  const router = useRouter();
  const provider = useMemo(() => new GoogleAuthProvider(), []);

  const handleAuthState = useCallback(async () => {
    const result = await getRedirectResult(auth);
    if (!result) {
      signInWithRedirect(auth, provider);
    } else {
      router.push("/talk");
    }
  }, [provider, router]);

  useEffect(() => {
    handleAuthState();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) router.push("/talk");
    // });
  }, [handleAuthState]);

  return <p>Loading...</p>;
}
