"use client";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";
import { signOut } from "firebase/auth";
import { auth } from "@/functions/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut(auth);
    router.push("/");
  };

  return (
    <>
      <Header />
      <Talk />
      <Eliza />
      <button onClick={handleSignOut}>{loading ? "Loading..." : "Logout"}</button>
    </>
  );
}
