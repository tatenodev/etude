"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => router.push("/login-redirect")}>Login</button>
    </div>
  );
}
