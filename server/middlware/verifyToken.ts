// const jwksClient = require('jwks-rsa');
import jwt, { GetPublicKeyOrSecret, Jwt, Secret, VerifyCallback, VerifyOptions } from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const client = jwksClient({
  jwksUri: "https://dev-2dclmx2vfoeqh2di.us.auth0.com/.well-known/jwks.json",
});

// const Gtoken =
//   "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtMmRjbG14MnZmb2VxaDJkaS51cy5hdXRoMC5jb20vIn0..O17rrAyOBNINGvLE.QEdcdpad1POHYduM9DECzfX6xHKL79QvuPVFGjhP7quw-faqyiBriyPblpjM3tF8waT-t7RbWGmTpyF1HZe7hmVcgvcWJy3TMt6Eln-hduy9M0x8MiVPPyPRx1JQNX6L2O7nF_rsi_l7agYk6Mq4yYftYIsYGHsLCIsgZcp2P503dlh5rWjoRtBBTfFv1_ULpTCO478ECN309xvu5yA1BvO1cgTR02OBr2fwSr9-aB2usSCCt-QLHgkOxZ15Y2d5xbmEMqDIfaMcfKZKDMbYQpEc8zoBUoJjSsxTeggkQ3yUf4UUWg3e9dKz6tDAf2gICfc1Ck2nMJq7k4qa6xixjnojLqrZUgk.MriGYt9rYz7x52-YXseudQ";

// 公開鍵を取得する関数
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}
// function getKey(header: { kid: string }, callback) {
//   client.getSigningKey(header.kid, function (err, key) {
//     const publicKey = key?.getPublicKey();
//     // const signingKey = key?.publicKey || key.rsaPublicKey;
//     const signingKey = publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   });
// }

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
  //
  //
  // // jwt.verify(token, getKey, (err, decoded) => {
  // const secret = (await client.getKeys()) as { kid: string };

  // jwt.verify(token, secret.kid, (err, decoded) => {
  //   if (err) {
  //     console.log("verifyJWT err!!:", err);
  //     return;
  //     // return callback(null, err);
  //   }

  //   // デコードされたトークンからクレームを取得
  //   // const { sub, name, permissions } = decoded;
  //   console.log("decoded", decoded);

  //   // クレームを使用して必要な処理を行う

  //   // callback(decoded);
  // });
}
