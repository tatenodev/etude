"use client";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebase/firebaseConfig";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/providers/contextProvider/Context";

export default function LoginRedirect() {
  const router = useRouter();
  const user = useContext(UserContext);
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
    if (user) {
      router.push("/talk");
    } else {
      handleAuthState();
    }
  }, [user, router, handleAuthState]);

  return <p>Loading...</p>;
}
