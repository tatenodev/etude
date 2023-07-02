"use client";

import { UserContext } from "@/functions/Context";
import { useContext } from "react";

export default function Report() {
  const user = useContext(UserContext);

  return <div>{JSON.stringify(user)}</div>;
}
