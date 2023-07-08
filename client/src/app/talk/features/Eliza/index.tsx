"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useHello } from "./useHello";

type ElizaProps = {
  token: string;
};

export function Eliza({ token }: ElizaProps) {
  const router = useRouter();
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [input, setInput] = useState("");
  const { helloResult } = useHello(input, token);
  const { data, refetch } = helloResult;

  // const createUser = async () => {
  //   const res = await elizaEndpoint.createUser(
  //     {
  //       name: "test name3",
  //       email: "test3@email.com",
  //       postTitle: "test title3",
  //       bio: "test bio3",
  //     },
  //     props.token
  //   );
  //   console.log("createdUser:", res);
  // };

  const handleSignOut = async () => {
    setLoadingLogout(true);
    await fetch("/api/session-logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div>
      <div>
        <p>message: {data?.message}</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => refetch()}>eliza & get user length</button>
      </div>
      <div>
        <button onClick={handleSignOut}>{loadingLogout ? "Loading..." : "Logout"}</button>
      </div>
    </div>
  );
}
