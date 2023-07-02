import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { ElizaService } from "@/connect/eliza_connect";
import { UserRequest } from "@/connect/eliza_pb";

const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
const client = createPromiseClient(ElizaService, transport);

const setHeader = (token: string) => ({ Authorization: `Bearer ${token}` });

export const elizaEndpoint = {
  getMessage: (message: string, token: string) =>
    client.say({ sentence: message ?? "hello world." }, { headers: setHeader(token) }),
  createUser: (user: UserRequest, token: string) => client.createUser(user, { headers: setHeader(token) }),
};
