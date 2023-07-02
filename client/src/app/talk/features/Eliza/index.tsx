"use client";
import { useState } from "react";
import { useGetMessage } from "./useGetMessage";
import { useRouter } from "next/navigation";
import { elizaEndpoint } from "@/app/endpoint/elizaEndpoint";

export function Eliza(props: { token: string }) {
  const router = useRouter();
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [input, setInput] = useState("");
  const { getMessageResult } = useGetMessage(input, props.token);
  const { data, refetch } = getMessageResult;

  const createUser = async () => {
    const res = await elizaEndpoint.createUser(
      {
        name: "test name3",
        email: "test3@email.com",
        postTitle: "test title3",
        bio: "test bio3",
      },
      props.token
    );
    console.log("createdUser:", res);
  };

  const handleSignOut = async () => {
    setLoadingLogout(true);
    await fetch("/api/session-logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div>
      <div>
        <p>{data?.sentence}</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => refetch()}>eliza & get user length</button>
      </div>
      <div>
        <button onClick={createUser}>createUser</button>
      </div>
      <div>
        <button onClick={handleSignOut}>{loadingLogout ? "Loading..." : "Logout"}</button>
      </div>
    </div>
  );
}
