import { Clinic } from "../../Core/zoomcare-api";

export interface ClinicRepository {
  get(id: string): Promise<Clinic>;
}
