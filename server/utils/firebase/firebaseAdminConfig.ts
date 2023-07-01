import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: cert(process.env.FIREBASE_ADMIN_SECRET_KEY ?? ""),
};

export function customInitFirebaseAdminApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}

export { auth as firebaseAdminAuth } from "firebase-admin";
