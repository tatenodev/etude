"use client";

import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { UserContext } from "./Context";

type UserProviderProps = {
  children: React.ReactNode;
  value: DecodedIdToken | null;
};

export function UserProvider({ children, value }: UserProviderProps) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
