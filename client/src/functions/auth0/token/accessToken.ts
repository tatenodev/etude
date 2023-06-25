import axios from "axios";

type TokenResponse = {
  access_token: string;
  token_type: string;
};

const options = {
  method: "POST",
  url: "https://dev-2dclmx2vfoeqh2di.us.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: "TTECnfvjA399aKRgSYVHeQQfdXiSNodU",
    client_secret: "M3wCQycn-qd_-KcNu1gJGZq6JVHH97yJSeifG2EoOD_DP0MuXKiMVWNEXQ4KrxeG",
    audience: "http://localhost:8080/",
  }),
  // etudeAPI Local
  // data: new URLSearchParams({
  //   grant_type: "client_credentials",
  //   client_id: "eCxu0Pg19FEg9BMnQDJq2UbSZlg4xXKq",
  //   client_secret: "PkALU0ayAmHo-zhT1OEkgZoS6-A3rnBzRMB1wHhleJ-6MXF2SuYkk9LIs_tFlQlC",
  //   audience: "http://localhost:8080/",
  // }),
  // headers: { "content-type": "application/json" },
  // body: `
  // {
  //   "client_id":"eCxu0Pg19FEg9BMnQDJq2UbSZlg4xXKq",
  //   "client_secret":"PkALU0ayAmHo-zhT1OEkgZoS6-A3rnBzRMB1wHhleJ-6MXF2SuYkk9LIs_tFlQlC",
  //   "audience":"http://localhost:3000/",
  //   "grant_type":"client_credentials"
  // }`,
  //
  // body: `
  // {
  //   "client_id":"TTECnfvjA399aKRgSYVHeQQfdXiSNodU",
  //   "client_secret":"M3wCQycn-qd_-KcNu1gJGZq6JVHH97yJSeifG2EoOD_DP0MuXKiMVWNEXQ4KrxeG",
  //   "audience":"http://localhost:8080/",
  //   "grant_type":"client_credentials"
  // }`,
};

export const getAccessToken = async () => {
  const result = await axios
    .request<TokenResponse>(options)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  return result;
};

// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://dev-2dclmx2vfoeqh2di.us.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"6KFM2VWyxZX1UMbnPg8Hcm0WjpXKUF01","client_secret":"_Z-mhZZesjrN9tXZrVWAqWe9l6x7tPKF4VVEO9WATHPhjzDaXJmSAJCObe8IeDoH","audience":"http://localhost:8080/","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// import axios from "axios";

// const options = {
//   method: "POST",
//   url: "https://{yourDomain}/oauth/token",
//   headers: { "content-type": "application/x-www-form-urlencoded" },
//   data: new URLSearchParams({
//     grant_type: "client_credentials",
//     client_id: "YOUR_CLIENT_ID",
//     client_secret: "YOUR_CLIENT_SECRET",
//     audience: "YOUR_API_IDENTIFIER",
//   }),
// };

// const getAccessToken = async () => {
//   const result = await axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   return result;
// };
