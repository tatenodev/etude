import { cookies } from "next/headers";
import { firebaseAdminAuth } from "@/functions/firebase/firebaseAdminConfig";

export async function POST(request: Response) {
  const auth = firebaseAdminAuth();
  const idToken = cookies().get("session")?.value || "";
  // セッションIDから認証情報を取得する
  const decodedClaims = await auth.verifySessionCookie(idToken).catch(() => null);
  // 全てのセッションを無効にする
  if (decodedClaims) {
    await auth.revokeRefreshTokens(decodedClaims.uid);
  }

  cookies().set({
    name: "session",
    value: "",
    path: "/",
    maxAge: 0,
  });

  const body = JSON.stringify({ status: "success" });
  return new Response(body, { status: 200 });
}
