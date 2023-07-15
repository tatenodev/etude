"use client";

import { etudeEndpoint } from "@/app/endpoint/etudeEndpoint";
import { useState } from "react";

type OnboardingProps = {
  token: string;
};

export function Onboarding({ token }: OnboardingProps) {
  const [teamName, setTeamName] = useState("マイチーム");

  const handleCreateTeam = async (teamName: string, token: string) => {
    const res = await etudeEndpoint.createInitialTeam({ teamName, token });
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
      <button onClick={() => handleCreateTeam(teamName, token)}>作成</button>
    </div>
  );
}
