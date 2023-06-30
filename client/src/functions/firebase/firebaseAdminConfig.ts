import { initializeApp, getApps, cert } from "firebase-admin/app";
import { auth } from "firebase-admin";

const firebaseAdminConfig = {
  credential: cert(process.env.FIREBASE_SECRET_KEY ?? ""),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}

// export const firebaseAdminAuth = auth(initializeApp(firebaseAdminConfig));
