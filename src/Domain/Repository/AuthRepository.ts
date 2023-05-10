import { AuthToken } from "../Model/Auth/AuthToken";

export interface AuthRepository {
  getAuthToken(): Promise<AuthToken>;
}
