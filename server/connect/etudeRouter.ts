import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { prisma } from "../server";
import { EtudeService } from "../gen/etude_connect";

export default (router: ConnectRouter) =>
  router.service(EtudeService, {
    async hello(req) {
      // prisma.user.findUnique({
      //   select: {
      //     googleUserId: ""
      //   }
      // })
      return { message: req.message };
    },
  });
