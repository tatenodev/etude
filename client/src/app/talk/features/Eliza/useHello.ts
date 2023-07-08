import { etudeEndpoint } from "@/app/endpoint/etudeEndpoint";
import { useQuery } from "@tanstack/react-query";

export const useHello = (message: string, token: string) => {
  const helloResult = useQuery({
    queryKey: ["hello", message],
    queryFn: () => etudeEndpoint.hello(message, token),
  });

  return {
    helloResult,
  };
};
