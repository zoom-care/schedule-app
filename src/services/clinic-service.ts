
import axios from "axios";
import { ClinicsDto } from "../model/ClinicsDto";
import notificationService from "./notification-service";

const apiBaseUrl = '/api/clinics/';

class ClinicService {
    getAll = async (): Promise<ClinicsDto|null> => {
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
const clinicService = new ClinicService();
export default clinicService;
