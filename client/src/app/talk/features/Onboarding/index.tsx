"use client";

import { etudeEndpoint } from "@/app/endpoint/etudeEndpoint";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { useState } from "react";

type OnboardingProps = {
  session: DecodedIdToken;
  token: string;
};

export function Onboarding({ session, token }: OnboardingProps) {
  const [teamName, setTeamName] = useState("マイチーム");

  const handleCreateTeam = async (teamName: string, session: DecodedIdToken, token: string) => {
    const res = await etudeEndpoint.createInitialTeam({
      googleUserId: session.uid,
      userName: session.name ?? "no name",
      email: session.email,
      teamName,
      token,
    });
    console.log("handleCreateTeam", res);
  };

  return (
    <div>
      <p>あなたのチームを作る</p>
      <label htmlFor="">チーム名</label>
      <input
        type="text"
        placeholder="チーム名を入力してください"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button onClick={() => handleCreateTeam(teamName, session, token)}>作成</button>
    </div>
  );
}
