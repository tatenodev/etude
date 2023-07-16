import { ConnectRouter } from "@bufbuild/connect";
import { EtudeService } from "../gen/etude_connect";
import { home } from "./controller/home";
import { createInitialTeam } from "./controller/createInitialTeam";

export default (router: ConnectRouter) => {
  return router.service(EtudeService, {
    async hello(req, context) {
      return { message: req.message };
    },
    createInitialTeam,
    home,
  });
};
