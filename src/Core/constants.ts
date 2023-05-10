export const BASE_URL = "/api";

export const ENDPOINT_LOGIN = "/login";

export const ENDPOINT_APPOINTMENTS = "/appointments";

export const ENDPOINT_CLINICS = "/clinics";

export const ENDPOINT_CLINIC = (id: string): string => `/clinic/${id}`;
