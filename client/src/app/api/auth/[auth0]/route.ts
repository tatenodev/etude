// https://github.com/auth0/nextjs-auth0/issues/1235
// https://github.com/auth0/nextjs-auth0/tree/beta#app-router
import { handleAuth } from "@auth0/nextjs-auth0";

export const GET = handleAuth();
