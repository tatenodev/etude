import { ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";
import { prisma } from "./server";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(ElizaService, {
    // implements rpc Say
    async say(req) {
      const allUsers = await prisma.user.findMany();
      return {
        sentence: `You said: ${req.sentence}, users: ${allUsers.length}`,
      };
    },
  });
