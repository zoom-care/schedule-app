
import axios, { AxiosError } from "axios";
import { AppointmentsDto } from "../model/AppointmentsDto";
import notificationService from "./notification-service";

const apiBaseUrl = '/api/appointments/';

class AppointmentService {
    getAll = async (): Promise<AppointmentsDto|null> => {
        try {
            var response = await axios.get(apiBaseUrl);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.status)
                console.error(error.response);
                notificationService.notifyError(error);
              } else {
                console.error(error);
                notificationService.notifyError(`unexpected error ${error}`);
              }
              return null;
        }
    }
}

const appointmentService = new AppointmentService();
export default appointmentService;


