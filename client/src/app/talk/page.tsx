import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Header } from "@/app/_features/Header";
import { Talk } from "./features/Talk";
import { Eliza } from "./features/Eliza";

export default withPageAuthRequired(
  async function Dashboard() {
    const session = await getSession();
    return (
      <>
        <Header />
        <Talk />
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <Eliza />
        <a href="/api/auth/logout">Logout</a>
      </>
    );
  },
  { returnTo: "/talk" }
);
