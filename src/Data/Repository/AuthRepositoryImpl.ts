import { BaseRepository } from "../../Core/BaseRepository/BaseRepository";
import { AuthToken } from "../../Domain/Model/Auth/AuthToken";
import { AuthRepository } from "../../Domain/Repository/AuthRepository";

export interface AuthCredentials {
  username: string;
  password: string;
}

export class AuthRepositoryImpl
  extends BaseRepository<AuthToken, AuthCredentials>
  implements AuthRepository
{
  collection = "login";

  getAuthToken() {
    return super.getAuthToken({ username: "test", password: "test" });
  }
}
