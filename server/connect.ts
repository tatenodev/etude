import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(ElizaService, {
    // implements rpc Say
    async say(req) {
      throw new ConnectError("test asdf", Code.FailedPrecondition);
      return {
        sentence: `You said: ${req.sentence}`,
      };
    },
  });
