import { Clinic } from "../../../Core/zoomcare-api";
import { ClinicRepository } from "../../Repository/ClinicRepository";

export interface GetClinicUseCase {
  invoke: () => Promise<Clinic>;
}

export class GetClinic implements GetClinicUseCase {
  private clinicRepo: ClinicRepository;
  private id: string;
  constructor(_clinicRepo: ClinicRepository, _id: string) {
    this.clinicRepo = _clinicRepo;
    this.id = _id;
  }

  async invoke() {
    return this.clinicRepo.get(this.id);
  }
}
