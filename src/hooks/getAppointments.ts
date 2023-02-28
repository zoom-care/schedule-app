import { SetStateAction } from "react";

export const getAppointments = async (authToken: string, setAppointments: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) => {
  try {
    const response = await fetch(`http://localhost:3000/api/appointments`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': authToken
      },
      method: 'GET'
    });
    const json = await response.json();
    if (!json.error) {
      console.log(json);
      setAppointments(json.appointmentSlots);
    };
  } catch (error) {
    console.log("error", error);
  }
};
