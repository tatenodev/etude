import { elizaEndpoint } from "@/app/endpoint/elizaEndpoint";
import { useQuery } from "@tanstack/react-query";

export const useGetMessage = (message: string, token: string) => {
  const getMessageResult = useQuery({
    queryKey: ["say", message],
    queryFn: () => elizaEndpoint.getMessage(message, token),
    enabled: false,
    cacheTime: 0,
  });

  return {
    getMessageResult,
  };
};
