import { ElizaService } from "@/connect/eliza_connect";
import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { useQuery } from "@tanstack/react-query";

export const useGetMessage = (message?: string) => {
  const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
  const client = createPromiseClient(ElizaService, transport);

  const getMessage = () => client.say({ sentence: message ?? "hello world." });

  const getMessageResult = useQuery({
    queryKey: ["say", message],
    queryFn: getMessage,
    enabled: false,
    cacheTime: 0,
  });

  return {
    getMessageResult,
  };
};
