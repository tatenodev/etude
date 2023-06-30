import { cookies } from "next/headers";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";

export default async function Dashboard() {
  const cookieStore = cookies();
  console.log("cookieStore:", cookieStore.get("session"));

  return (
    <>
      <Header />
      <Talk />
      <Eliza />
    </>
  );
}
