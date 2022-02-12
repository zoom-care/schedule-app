export interface IClinic {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
}

export interface IClinicsDto {
    clinics: IClinic[];
}