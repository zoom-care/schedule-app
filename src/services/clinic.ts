import { ClinicsDto } from "../zoomcare-api";
import { fetchData } from "./api";

export async function getAllClinics(token: string): Promise<ClinicsDto> {
    return fetchData('/api/clinics', token); 
} 