import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import routes from "./connect";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const server = fastify();
  await server.register(fastifyConnectPlugin, {
    routes,
  });
  await server.register(cors, {
    // put your options here
    origin: "http://localhost:3000",
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  });
  await server.listen({ host: "localhost", port: 8080 });
  console.log("server is listening at", server.addresses());
}
// You can remove the main() wrapper if you set type: module in your package.json,
// and update your tsconfig.json with target: es2017 and module: es2022.
void main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });