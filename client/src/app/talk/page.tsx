import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Header } from "@/app/_features/Header";

export default withPageAuthRequired(
  async function Dashboard() {
    const session = await getSession();
    return (
      <div>
        <Header />
        <p>Dashboard</p>
        <p>{JSON.stringify(session?.user, null, 2)}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  },
  { returnTo: "/dashboard" }
);
