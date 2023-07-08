import { firebaseAdminAuth } from "@/functions/firebase/firebaseAdminConfig";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";

export default async function Dashboard() {
  const cookieStore = cookies();
  const auth = firebaseAdminAuth();
  const idToken = cookieStore.get("session")?.value || "";
  const user = await auth.verifySessionCookie(idToken, true).catch(() => null);

  if (!user) redirect("/login");

  return (
    <>
      <Header />
      <Talk />
      {JSON.stringify(user)}
      <Eliza token={idToken} />
    </>
  );
}
