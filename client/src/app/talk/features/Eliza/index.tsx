"use client";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { ElizaService } from "@/connect/eliza_connect";
import { useState } from "react";

export function Eliza() {
  const [input, setInput] = useState("");

  const transport = createConnectTransport({
    baseUrl: "http://localhost:8080/",
  });
  const client = createPromiseClient(ElizaService, transport);

  const createUser = async () => {
    const res = await client.createUser({
      name: "test2 name",
      email: "test2@email.com",
      postTitle: "test title",
      bio: "test bio",
    });
    console.log("createUser:", res);
  };

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={async () => {
            const res = await client.say({ sentence: input ?? "hello!!" });
            console.log("res:", res.sentence);
          }}
        >
          eliza & get user length
        </button>
      </div>
      <div>
        <button onClick={createUser}>createUser</button>
      </div>
    </div>
  );
}
