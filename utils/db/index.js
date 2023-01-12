import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

const serviceConfig = {
  type: process.env.SERVICE_FIREBASE_TYPE,
  project_id: process.env.SERVICE_FIREBASE_PROJECT_ID,
  private_key_id: process.env.SERVICE_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.SERVICE_FIREBASE_PRIVATE_KEY,
  client_email: process.env.SERVICE_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.SERVICE_FIREBASE_CLIENT_ID,
  auth_uri: process.env.SERVICE_FIREBASE_AUTH_URI,
  token_uri: process.env.SERVICE_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.SERVICE_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.SERVICE_FIREBASE_CLIENT_X509_CERT_URL,
};

if (!admin.apps.length) {
  try {
    console.log("service", serviceConfig);
    admin.initializeApp({
      credential: admin.credential.cert(serviceConfig),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
