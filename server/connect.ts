import { Code, ConnectError, ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";
import { prisma } from "./server";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(ElizaService, {
    // implements rpc Say
    async say(req) {
      throw new ConnectError("test", Code.FailedPrecondition);
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
        // const connectErr = ConnectError.from(err);
        // console.log("err:", connectErr);
        //
        throw new ConnectError("hoge", Code.InvalidArgument);
        //
        // if (err instanceof Prisma.PrismaClientKnownRequestError) {
        //   console.log("There is a unique constraint violation, a new user cannot be created with this email");
        //   return {
        //     code: 1,
        //     message: "There is a unique constraint violation, a new user cannot be created with this email",
        //   };
        // }
      }
    },
  });
