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
    client_id: process.env.AUTH0_CLIENT_ID ?? "",
    client_secret: process.env.AUTH0_CLIENT_SECRET ?? "",
    audience: "http://localhost:8080/",
  }),
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
