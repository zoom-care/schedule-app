import { AuthToken } from "../../Model/Auth/AuthToken";
import { AuthRepository } from "../../Repository/AuthRepository";

export interface GetAuthTokenUseCase {
  invoke: () => Promise<AuthToken>;
}

export class GetAuthToken implements GetAuthTokenUseCase {
  private authRepo: AuthRepository;
  constructor(_autRepo: AuthRepository) {
    this.authRepo = _autRepo;
  }

  async invoke() {
    return await this.authRepo.getAuthToken();
  }
}
