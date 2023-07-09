import { cookies } from "next/headers";
import { firebaseAdminAuth } from "../firebase/firebaseAdminConfig";

export const getSession = async () => {
  const cookieStore = cookies();
  const auth = firebaseAdminAuth();
  const idToken = cookieStore.get("session")?.value || "";
  const user = await auth.verifySessionCookie(idToken, true).catch(() => null);
  return {
    user,
    idToken,
  };
};
