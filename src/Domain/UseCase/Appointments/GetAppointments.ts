import { AppointmentsDto } from "../../../Core/zoomcare-api";
import { AppointmentsRepository } from "../../Repository/AppointmentsRepository";

export interface GetAppointmentsUseCase {
  invoke: () => Promise<AppointmentsDto>;
}

export class GetAppointments implements GetAppointmentsUseCase {
  private appointmentsRepo: AppointmentsRepository;
  constructor(_appointmentsRepo: AppointmentsRepository) {
    this.appointmentsRepo = _appointmentsRepo;
  }

  async invoke() {
    return this.appointmentsRepo.customGet();
  }
}
