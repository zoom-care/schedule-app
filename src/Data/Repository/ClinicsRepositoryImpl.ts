import { BaseRepository } from "../../Core/BaseRepository/BaseRepository";
import { ClinicsDto } from "../../Core/zoomcare-api";

export class ClinicsRepositoryImpl extends BaseRepository<ClinicsDto> {
  collection = "clinics";

  customGet() {
    return super.customGet();
  }
}
