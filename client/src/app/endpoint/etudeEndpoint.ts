import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { EtudeService } from "@/connect/etude_connect";

const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
const client = createPromiseClient(EtudeService, transport);

const setHeader = (token: string) => ({ Authorization: `Bearer ${token}` });

export const etudeEndpoint = {
  hello: (message: string, token: string) => client.hello({ message }, { headers: setHeader(token) }),
};
