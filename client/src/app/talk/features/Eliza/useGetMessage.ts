import { elizaEndpoint } from "@/app/endpoint/elizaEndpoint";
import { ElizaService } from "@/connect/eliza_connect";
import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { firebaseAuth } from "@/functions/firebase/firebaseConfig";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export const useGetMessage = (message?: string, token?: string) => {
  const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
  const client = createPromiseClient(ElizaService, transport);
  // const [token, setToken] = useState("");
  // const hoge = cookies().get("session")?.value;
  // console.log("hoge", hoge);

  // const headers = new Headers();
  // headers.set("Authorization", `Bearer ${token}`);

  // const getMessage = () => client.say({ sentence: message ?? "hello world." }, { headers });

  const getMessageResult = useQuery({
    queryKey: ["say", message],
    queryFn: () => elizaEndpoint.getMessage(message ?? "", token ?? ""),
    enabled: false,
    cacheTime: 0,
  });

  return {
    getMessageResult,
  };
};
