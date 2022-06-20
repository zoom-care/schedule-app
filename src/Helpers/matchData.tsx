import { AppointmentsDto, AppointmentSlot, Clinic, ClinicsDto } from "../zoomcare-api";

const matchData = (providers: AppointmentsDto, allClinics: ClinicsDto) => {

    const { appointmentSlots }: { appointmentSlots: AppointmentSlot[] } = providers;
    const { clinics }: { clinics: Clinic[] } = allClinics;

    return appointmentSlots.map((provider: AppointmentSlot) => {
        const matchedClinics = { clinic: clinics.filter((clinic: Clinic) => clinic.id === provider.clinicId)[0] };
        return { ...provider, ...matchedClinics };
    });
}

export default matchData;