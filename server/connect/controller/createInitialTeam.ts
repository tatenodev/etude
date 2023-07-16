import { Code, ConnectError, HandlerContext } from "@bufbuild/connect";
import { CreateTeamRequest } from "../../gen/etude_pb";
import { prisma } from "../../app";
import { verifySession } from "../middleware/verifySession";

export const createInitialTeam = async (req: CreateTeamRequest, context: HandlerContext) => {
  try {
    const { session } = await verifySession(context);
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
                  email: session.email ?? "no email",
                },
              },
              isOwner: true,
            },
          ],
        },
      },
    });
  } catch (err) {
    console.log("createInitialTeam:", JSON.stringify(err));
    throw new ConnectError(JSON.stringify(err), Code.Internal);
  }
};
