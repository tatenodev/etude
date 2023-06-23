"use client";
// auth0 beta document
// https://github.com/auth0/nextjs-auth0/tree/beta#app-router
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  console.log("hoge");
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <Link href="/talk">ダッシュボードへ</Link>
      </div>
    );
  }

  return <a href="/api/auth/login?returnTo=/talk">Login</a>;
}
