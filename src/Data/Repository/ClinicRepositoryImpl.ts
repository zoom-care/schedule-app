import { BaseRepository } from "../../Core/BaseRepository/BaseRepository";
import { Clinic } from "../../Core/zoomcare-api";

export class ClinicRepositoryImpl extends BaseRepository<Clinic> {
  collection = "clinics";

  get(id: string) {
    return super.get(id);
  }
}
