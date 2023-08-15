export interface ApointmentListItem {
  providerId: number;
  clinicId: number;
  clinicName?: string;
  clinicAddress?: string;
  clinicCity?: string;
  clinicZipcode?: string;
  providerName: string;
  providerCredentials?: string;
  providerPhoneNumber?: string;
  appointments: { id: number; startTime: string; }[];
};
