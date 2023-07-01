"use client";

import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { firebaseAuth } from "@/functions/firebase/firebaseConfig";
import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function LoginRedirect() {
  const router = useRouter();
  const provider = useMemo(() => new GoogleAuthProvider(), []);

  const handleAuthState = useCallback(async () => {
    const result = await getRedirectResult(firebaseAuth);
    if (!result) {
      signInWithRedirect(firebaseAuth, provider);
    } else {
      const idToken = await result.user.getIdToken();
      // Cookieにセッションを付与するようにAPIを投げる
      await fetch("/api/session-login", { method: "POST", body: JSON.stringify({ idToken }) });
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
