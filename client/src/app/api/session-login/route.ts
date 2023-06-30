import { cookies } from "next/headers";
import { firebaseAdminAuth } from "@/functions/firebase/firebaseAdminConfig";
import { NextResponse } from "next/server";

export async function POST(request: Response) {
  // Tokenの有効期限
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5日
  // const cookieStore = cookies();
  // const idToken = cookieStore.get("idToken")?.value ?? "";
  const { idToken } = await request.json();
  console.log("server側 idToken:", idToken);
  // Cookieに保存するセッションIDを作成する
  const sessionCookie = await firebaseAdminAuth().createSessionCookie(idToken, { expiresIn });
  const body = JSON.stringify({ status: "success" });

  // TODO: NextResponse使ってみても良いかも
  return new Response(body, {
    status: 200,
    headers: { "Set-Cookie": `session=${sessionCookie}; Max-Age=${expiresIn}; Path=/; HttpOnly` },
  });
}
