import { ConnectRouter, ConnectError, Code } from "@bufbuild/connect";
import { prisma } from "../server";
import { EtudeService } from "../gen/etude_connect";

export default (router: ConnectRouter) => {
  return router.service(EtudeService, {
    async hello(req, context) {
      return { message: req.message };
    },
    async createInitialTeam(req) {
      const res = prisma.team.create({
        data: {
          name: req.teamName,
          members: {
            create: [
              {
                user: {
                  create: {
                    googleUserId: req.googleUserId,
                    name: req.userName,
                    email: req.email,
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
      console.log("createInitialTeam:", await res.then((a) => a));

      return { status: "success" };
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
