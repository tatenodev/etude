import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReduxProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechEtude | エンジニアコミュニティのトークを活性化しよう",
  description:
    "TechEtudeは、エンジニアコミュニティのトークを活性化するためのプラットフォームです。最新の技術トピックや開発のベストプラクティスについての対話を通じて、エンジニア同士の交流と学びを促進します。参加者はトークを通じてコミュニケーションスキルを向上させ、より深い技術的な知識を獲得することができます。一緒に成長し、共に学ぶエンジニアコミュニティを育てませんか？",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <UserProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </UserProvider>
      </body>
    </html>
  );
}
