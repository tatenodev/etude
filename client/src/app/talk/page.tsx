import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";
import { customInitApp } from "@/functions/firebase/firebaseAdminConfig";
import { auth } from "firebase-admin";
// import { firebaseAdminAuth } from "@/functions/firebase/firebaseAdminConfig";

export default async function Dashboard() {
  customInitApp();
  const user = await auth()
    .getUser("rE33CnF2DoOASAg0JAx656yj08K2")
    .then((res) => res.email);
  console.log("user!:", user);
  // const hoge = firebaseAdminAuth.getUser("rE33CnF2DoOASAg0JAx656yj08K2");

  return (
    <>
      <Header />
      <Talk />
      <Eliza />
    </>
  );
}
