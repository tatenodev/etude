import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { prisma } from "../server";
import { EtudeService } from "../gen/etude_connect";
import { firebaseAdminAuth } from "../utils/firebase/firebaseAdminConfig";

export default (router: ConnectRouter) => {
  const auth = firebaseAdminAuth();
  return router.service(EtudeService, {
    async hello(req, context) {
      return { message: req.message };
    },
    async createInitialTeam(req, context) {
      try {
        const token = context.requestHeader.get("authorization")?.replace("Bearer ", "") ?? "";
        const session = await auth.verifySessionCookie(token);
        if (!session.email) throw new Error("Email does not exist.");

        await prisma.team.create({
          data: {
            name: req.teamName,
            members: {
              create: [
                {
                  user: {
                    create: {
                      googleUserId: session.uid,
                      name: session.name ?? "no name",
                      email: session.email,
                    },
                  },
                  isOwner: true,
                },
              ],
            },
          },
          include: {
            members: true,
          },
        });
      } catch (err) {
        console.log("createInitialTeam:", JSON.stringify(err));
        throw new ConnectError(JSON.stringify(err), Code.Internal);
      }
    },
    // async createUser(req, context) {
    //   const token = context.requestHeader.get("authorization")?.replace("Bearer ", "") ?? "";
    //   const sessionUser = await auth.verifySessionCookie(token);
    //   let recordUser;

    //   recordUser = await prisma.user.findUnique({
    //     where: {
    //       googleUserId: sessionUser.uid,
    //     },
    //   });

    //   if (!recordUser) {
    //     recordUser = await prisma.user.create({
    //       data: {
    //         googleUserId: sessionUser.uid,
    //         name: sessionUser.name ?? "NoName",
    //         email: sessionUser.email ?? "NoEmail",
    //       },
    //     });
    //   }
    // },
  });
};
