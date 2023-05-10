import { BaseRepository } from "../../Core/BaseRepository/BaseRepository";
import { AppointmentsDto } from "../../Core/zoomcare-api";

export class AppointmentsRepositoryImpl extends BaseRepository<AppointmentsDto> {
  collection = "appointments";

  customGet() {
    return super.customGet();
  }
}
