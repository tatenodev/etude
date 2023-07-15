import { APP_ENDPOINT_LOCAL } from "@/constants/api";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { EtudeService } from "@/connect/etude_connect";
import { PartialMessage } from "@bufbuild/protobuf";
import { CreateTeamRequest } from "@/connect/etude_pb";

const transport = createConnectTransport({ baseUrl: APP_ENDPOINT_LOCAL });
const client = createPromiseClient(EtudeService, transport);
const setHeader = (token: string) => ({ Authorization: `Bearer ${token}` });

type CreateinitialTeamProps = PartialMessage<CreateTeamRequest> & { token: string };

export const etudeEndpoint = {
  hello: (message: string, token: string) => client.hello({ message }, { headers: setHeader(token) }),
  createInitialTeam: ({ teamName, token }: CreateinitialTeamProps) =>
    client.createInitialTeam({ teamName }, { headers: setHeader(token) }),
};
