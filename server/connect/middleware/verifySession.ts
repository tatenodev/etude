import { HandlerContext } from "@bufbuild/connect";
import { firebaseAdminAuth } from "../../utils/firebase/firebaseAdminConfig";

export const verifySession = async (context: HandlerContext) => {
  const auth = firebaseAdminAuth();
  const token = context.requestHeader.get("authorization")?.replace("Bearer ", "") ?? "";
  const session = await auth.verifySessionCookie(token);
  if (!session.email) throw new Error("Email does not exist.");
  return { session };
};
