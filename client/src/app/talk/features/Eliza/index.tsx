"use client";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { ElizaService } from "@/connect/eliza_connect";
import { useState } from "react";
import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { useGetMessage } from "./useGetMessage";

export function Eliza() {
  const [input, setInput] = useState("");
  const { getMessageResult } = useGetMessage(input);
  const { data, refetch } = getMessageResult;
  const message = data?.sentence;

  const transport = createConnectTransport({
    baseUrl: APP_ENDPOINT_LOCAL,
  });
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

  return (
    <div>
      <div>
        <p>{message}</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => refetch()}>eliza & get user length</button>
      </div>
      <div>
        <button onClick={createUser}>createUser</button>
      </div>
    </div>
  );
}
