"use client";

import { Team } from "@/connect/etude_pb";
import { Menu } from "./Menu/menu";

type HeaderProps = {
  teams: Team[];
};

export async function Header({ teams }: HeaderProps) {
  console.log("teams", teams);
  return (
    <>
      <h1>Etude</h1>
      <select name="" id="">
        {teams.map((team) => (
          <option key={team.id.toString()} value={team.id.toString()}>
            {team.name}
          </option>
        ))}
      </select>
      <Menu />
    </>
  );
}
