// const jwksClient = require('jwks-rsa');
import jwt, { GetPublicKeyOrSecret, Jwt, Secret, VerifyCallback, VerifyOptions } from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const client = jwksClient({
  jwksUri: "https://dev-2dclmx2vfoeqh2di.us.auth0.com/.well-known/jwks.json",
});

// 公開鍵を取得する関数
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

export async function verifyJWT(token: string, callback: (decoded: any, err?: jwt.VerifyErrors) => void) {
  jwt.verify(token, getKey, function (err, decoded) {
    if (err) {
      // JWT が無効な場合のエラーハンドリング
      console.error("JWT verification failed:", err);
    } else {
      // JWT が有効な場合の処理
      console.log("Decoded JWT:", decoded);
    }
  });
}
