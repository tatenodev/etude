import { cookies } from "next/headers";
import { firebaseAdminAuth } from "@/utils/firebase/firebaseAdminConfig";

export async function POST(request: Response) {
  // Tokenの有効期限(秒指定で5日)
  const expiresIn = 24 * 60 * 60 * 5;
  const { idToken } = await request.json();
  // Cookieに保存するセッションIDを作成する
  const sessionCookie = await firebaseAdminAuth().createSessionCookie(idToken, { expiresIn: expiresIn * 1000 });
  const body = JSON.stringify({ status: "success" });

  cookies().set({
    name: "session",
    value: sessionCookie,
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: expiresIn,
  });

  return new Response(body, { status: 200 });
}
