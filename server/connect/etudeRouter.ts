import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { prisma } from "../server";
import { EtudeService } from "../gen/etude_connect";

export default (router: ConnectRouter) =>
  router.service(EtudeService, {
    async hello(req) {
      return { message: req.message };
    },
  });
