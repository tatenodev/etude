import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
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
    async createUser(req) {
      try {
        const user = await prisma.user.create({
          data: {
            name: req.name,
            email: req.email,
            posts: {
              create: { title: req.postTitle },
            },
            profile: {
              create: { bio: req.bio },
            },
          },
        });

        return {
          createdUserName: user.name ?? "",
        };
      } catch (err) {
        throw new ConnectError("Could not create user.", Code.InvalidArgument);
      }
    },
  });
