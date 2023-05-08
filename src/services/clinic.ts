import { ClinicsDto } from "../zoomcare-api";

export async function getAllClinics(): Promise<ClinicsDto> {
    const response = await fetch('/api/clinics', { method: 'GET', headers: {'Authorization': sessionStorage.getItem('authToken') as string } })
    return await response.json();

} 