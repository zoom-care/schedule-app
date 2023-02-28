import { SetStateAction } from "react";

export const getClinics = async (authToken: string, setClinics: { (value: SetStateAction<never[]>): void; (arg0: any): void; }, clinicId?: string) => {
  const url = !!clinicId ? `http://localhost:3000/api/clinics/${clinicId}` : 'http://localhost:3000/api/clinics'
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `${authToken}`
      },
      method: 'GET'
    });
    const json = await response.json();
    if (!json.error) {
      console.log(json);
      setClinics(json.clinics);
    };
  } catch (error) {
    console.log("error", error);
  }
}
