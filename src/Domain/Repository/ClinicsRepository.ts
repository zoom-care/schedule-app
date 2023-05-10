import { ClinicsDto } from "../../Core/zoomcare-api";

export interface ClinicsRepository {
  customGet(): Promise<ClinicsDto>;
}
