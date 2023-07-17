import { redirect } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";
import { getSession } from "@/utils/session";
import { Onboarding } from "./features/Onboarding";
import { etudeEndpoint } from "../endpoint/etudeEndpoint";

function convertToSimpleValue<T>(value: T) {
  const formatValue: T = JSON.parse(JSON.stringify(value));
  return formatValue;
}

export default async function Dashboard() {
  const { user, idToken } = await getSession();
  const home = await etudeEndpoint.home(idToken);
  const formatHome = convertToSimpleValue(home);
  console.log("formatHome:", formatHome);

  if (!user) redirect("/login");

  return (
    <>
      <Header teams={formatHome.teams} />
      {!home.user?.email && <Onboarding token={idToken} />}
      <Talk />
      {JSON.stringify(user)}
      <Eliza token={idToken} />
    </>
  );
}
