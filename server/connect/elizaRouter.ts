import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { ElizaService } from "../gen/eliza_connect";
import { prisma } from "../server";
import { verifyJWT } from "../middlware/verifyToken";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(ElizaService, {
    // implements rpc Say
    async say(req, context) {
      const token = context.requestHeader.get("authorization")?.replace("Bearer ", "");
      console.log("reqHeader:", token);
      verifyJWT(token ?? "", console.log);
      const allUsers = await prisma.userOld.findMany();
      return {
        sentence: `You said: ${req.sentence}, users: ${allUsers.length}`,
      };
    },
    async createUser(req) {
      try {
        const user = await prisma.userOld.create({
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