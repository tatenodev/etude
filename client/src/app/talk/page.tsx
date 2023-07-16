import { redirect } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";
import { getSession } from "@/utils/session";
import { Onboarding } from "./features/Onboarding";
import { etudeEndpoint } from "../endpoint/etudeEndpoint";

export default async function Dashboard() {
  const { user, idToken } = await getSession();
  const hoge = await etudeEndpoint.home(idToken);
  console.log("hoge", hoge);

  if (!user) redirect("/login");

  return (
    <>
      <Header />
      <Onboarding token={idToken} />
      <Talk />
      {JSON.stringify(user)}
      <Eliza token={idToken} />
    </>
  );
}
