import { firebaseAdminAuth } from "@/utils/firebase/firebaseAdminConfig";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";
import { getSession } from "@/utils/session";

export default async function Dashboard() {
  const { user, idToken } = await getSession();

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
