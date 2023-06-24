"use client";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { ElizaService } from "@/connect/eliza_connect";
import { useState } from "react";
import { useGetPokemonByNameQuery } from "@/store/services/pokemon";
import Image from "next/image";

export function Eliza() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const [input, setInput] = useState("");

  const transport = createConnectTransport({
    baseUrl: "http://localhost:8080/",
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
        <p>pokemon api</p>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <Image src={data.sprites.front_shiny} alt={data.species.name} width={100} height={100} />
          </>
        ) : null}
      </div>
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
