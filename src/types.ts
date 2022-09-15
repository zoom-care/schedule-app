export type Token = {
  authToken?: string;
  username?: string;
};

export type Appointment = {
  id: number;
  clinicId: number;
  durationInMinutes: number;
  provider: Provider;
  startTime: string;
};

export type Provider = {
  id: number;
  name: string;
  credentials: string;
  language: string;
  phoneNumber: string;
};
