import { Code, ConnectError, HandlerContext } from "@bufbuild/connect";
import { prisma } from "@src/app";
import { verifySession } from "@src/connect/middleware/verifySession";
import { Empty } from "@bufbuild/protobuf";

export const home = async (_: Empty, context: HandlerContext) => {
  try {
    const { session } = await verifySession(context);

    const user = await prisma.user.findUnique({
      where: { googleUserId: session.uid },
      include: {
        teamMembers: {
          include: { team: { include: { talks: true } } },
        },
      },
    });

    if (!user) {
      return {
        user: {},
        teams: [],
      };
    }

    const formatTeams = user.teamMembers.map((member) => ({
      id: BigInt(member.teamId),
      name: member.team.name,
      talks: member.team.talks.map((talk) => ({
        title: talk.title,
        startedAt: talk.startedAt.toISOString(),
      })),
    }));

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      teams: formatTeams,
    };
  } catch (err) {
    console.log("createInitialTeam:", JSON.stringify(err));
    throw new ConnectError(JSON.stringify(err), Code.Internal);
  }
};
