"use client";

import { useState } from "react";

type GuideProps = {
  userName: string;
};

export function Onboarding({ userName }: GuideProps) {
  const name = userName ? `${userName}のチーム` : "マイチーム";
  const [teamName, setTeamName] = useState(name);

  const handleCreateTeam = () => {
    alert(`チーム作成 ${teamName}`);
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
      <button onClick={handleCreateTeam}>作成</button>
    </div>
  );
}
