import { fetchData } from './apiCall';
import { ClinicsDto } from '../zoomcare-api';

export async function getAllClinics(token: string): Promise<ClinicsDto> {
  return fetchData('/api/clinics', token);
}
