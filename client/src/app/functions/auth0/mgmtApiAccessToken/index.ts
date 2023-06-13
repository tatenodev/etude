import axios from "axios";

export type GetTokenResponse = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
};

export const getMgmtApiAccessToken = () => {
  const options = {
    method: "POST",
    url: "https://dev-2dclmx2vfoeqh2di.us.auth0.com/oauth/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AUTH0_CLIENT_ID ?? "",
      client_secret: process.env.AUTH0_CLIENT_SECRET ?? "",
      audience: "https://dev-2dclmx2vfoeqh2di.us.auth0.com/api/v2/",
    }),
  };

  return axios
    .request<GetTokenResponse>(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
