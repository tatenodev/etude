import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { ElizaService } from "../gen/eliza_connect";
import { prisma } from "../app";
import { customInitFirebaseAdminApp, firebaseAdminAuth } from "../utils/firebase/firebaseAdminConfig";

export default (router: ConnectRouter) => {
  const auth = firebaseAdminAuth();
  // registers buf.connect.demo.eliza.v1.ElizaService
  return router.service(ElizaService, {
    // implements rpc Say
    async say(req, context) {
      const token = context.requestHeader.get("authorization")?.replace("Bearer ", "") ?? "";
      console.log("reqHeader:", token);

      try {
        // const user = await auth.verifyIdToken(token);
        const user = await auth.verifySessionCookie(token);
        console.log("user", user.email);
      } catch (err) {
        console.log("err:", err);
      }

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
};
