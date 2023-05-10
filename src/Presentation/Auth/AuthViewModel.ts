import { useState } from "react";
import { AuthToken } from "../../Domain/Model/Auth/AuthToken";
import { GetAuthToken } from "../../Domain/UseCase/Auth/GetAuthToken";
import { AuthRepositoryImpl } from "../../Data/Repository/AuthRepositoryImpl";

export default function AuthTokenViewModel() {
  const [data, setData] = useState<AuthToken>();

  const UseCase = new GetAuthToken(new AuthRepositoryImpl());

  async function getAuthToken() {
    setData(await UseCase.invoke());
  }

  return {
    getAuthToken,
    data,
  };
}
