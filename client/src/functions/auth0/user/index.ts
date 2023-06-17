import axios from "axios";
import type { CreateUserRequest, CreateUserResponse } from "./type";

// TODO: 引数調整する
export const createUser = ({ requestData, apiKey }: { requestData: CreateUserRequest; apiKey: string }) => {
  let data = JSON.stringify(requestData);
  // let data = JSON.stringify({
  //   email: "string",
  //   phone_number: "string",
  //   user_metadata: {},
  //   blocked: false,
  //   email_verified: false,
  //   phone_verified: false,
  //   app_metadata: {},
  //   given_name: "string",
  //   family_name: "string",
  //   name: "string",
  //   nickname: "string",
  //   picture: "string",
  //   user_id: "string",
  //   connection: "string",
  //   password: "string",
  //   verify_email: false,
  //   username: "string",
  // });

  let config = {
    method: "post",
    url: "https://login.auth0.com/api/v2/users",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
    data: data,
  };

  return axios<CreateUserResponse>(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
