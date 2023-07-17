import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/store/provider";
import { ReactQueryProvider } from "@/providers/reactQuery/provider";
import { customInitFirebaseAdminApp, firebaseAdminAuth } from "@/utils/firebase/firebaseAdminConfig";
import { cookies } from "next/headers";
import { UserProvider } from "@/providers/contextProvider/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Etude",
  description: "Etude description",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  customInitFirebaseAdminApp();

  const cookieStore = cookies();
  const auth = firebaseAdminAuth();
  const idToken = cookieStore.get("session")?.value || "";
  const user = await auth.verifySessionCookie(idToken, true).catch(() => null);

  return (
    <html lang="ja">
      <body className={inter.className}>
        <UserProvider value={user}>
          <ReactQueryProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </ReactQueryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
