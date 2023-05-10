import { AppointmentsDto } from "../../Core/zoomcare-api";

export interface AppointmentsRepository {
  customGet(): Promise<AppointmentsDto>;
}
