"use client";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { ElizaService } from "@/connect/eliza_connect";
import { useEffect, useState } from "react";
import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { useGetMessage } from "./useGetMessage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/functions/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

export function Eliza() {
  const router = useRouter();
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [input, setInput] = useState("");
  const { getMessageResult } = useGetMessage(input);
  const { data, refetch } = getMessageResult;

  const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
  const client = createPromiseClient(ElizaService, transport);

  const createUser = async () => {
    const res = await client.createUser({
      name: "test name",
      email: "test@email.com",
      postTitle: "test title",
      bio: "test bio",
    });
    console.log("createUser:", res);
  };

  const handleSignOut = async () => {
    setLoadingLogout(true);
    await signOut(auth);
    router.push("/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user:", user);
    });
  }, []);

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
