import { createContext } from "react";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export const UserContext = createContext<DecodedIdToken | null>(null);
