"use client";

import { UserContext } from "@/providers/contextProvider/Context";
import { useContext } from "react";

export default function Report() {
  const user = useContext(UserContext);

  return <div>{JSON.stringify(user)}</div>;
}
