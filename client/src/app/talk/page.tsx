import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Talk />
      <Eliza />
    </>
  );
}
