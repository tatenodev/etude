import { ElizaService } from "@/connect/eliza_connect";
import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@/functions/auth0/token/accessToken";
import { useEffect, useState } from "react";

export const useGetMessage = (message?: string) => {
  const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
  const client = createPromiseClient(ElizaService, transport);
  const [token, setToken] = useState("");

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${token}`);

  const getMessage = () => client.say({ sentence: message ?? "hello world." }, { headers });

  const getMessageResult = useQuery({
    queryKey: ["say", message],
    queryFn: getMessage,
    enabled: false,
    cacheTime: 0,
  });

  useEffect(() => {
    (async () => {
      const token = await getAccessToken();
      if (!token) return;
      setToken(token.access_token);
      console.log("token", token);
    })();
  }, []);

  return {
    getMessageResult,
  };
};
