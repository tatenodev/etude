import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { prisma } from "../server";
import { EtudeService } from "../gen/etude_connect";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(EtudeService, {
    // async createUser(req) {
    //   try {
    //     const user = await prisma.user.create({
    //       data: {
    //         name: req.name,
    //         email: req.email,
    //         posts: {
    //           create: { title: req.postTitle },
    //         },
    //         profile: {
    //           create: { bio: req.bio },
    //         },
    //       },
    //     });
    //     return {
    //       createdUserName: user.name ?? "",
    //     };
    //   } catch (err) {
    //     throw new ConnectError("Could not create user.", Code.InvalidArgument);
    //   }
    // },
  });
