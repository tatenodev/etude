"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {};

  return (
    <main>
      <button onClick={handleLogin}>ログイン</button>
    </main>
  );
}
