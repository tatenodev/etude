import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/store/provider";
import { ReactQueryProvider } from "@/functions/reactQuery/provider";
import { customInitFirebaseAdminApp } from "@/functions/firebase/firebaseAdminConfig";
import { auth } from "firebase-admin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechEtude | エンジニアコミュニティのトークを活性化しよう",
  description:
    "TechEtudeは、エンジニアコミュニティのトークを活性化するためのプラットフォームです。最新の技術トピックや開発のベストプラクティスについての対話を通じて、エンジニア同士の交流と学びを促進します。参加者はトークを通じてコミュニケーションスキルを向上させ、より深い技術的な知識を獲得することができます。一緒に成長し、共に学ぶエンジニアコミュニティを育てませんか？",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  customInitFirebaseAdminApp();
  const user = await auth()
    .getUser("rE33CnF2DoOASAg0JAx656yj08K2")
    .then((res) => res.email);
  console.log("user!:", user);

  return (
    <html lang="ja">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
