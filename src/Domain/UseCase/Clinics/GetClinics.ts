import { ClinicsDto } from "../../../Core/zoomcare-api";
import { ClinicsRepository } from "../../Repository/ClinicsRepository";

export interface GetClinicsUseCase {
  invoke: () => Promise<ClinicsDto>;
}

export class GetClinics implements GetClinicsUseCase {
  private clinicsRepo: ClinicsRepository;
  constructor(_clinicsRepo: ClinicsRepository) {
    this.clinicsRepo = _clinicsRepo;
  }

  async invoke() {
    return this.clinicsRepo.customGet();
  }
}
