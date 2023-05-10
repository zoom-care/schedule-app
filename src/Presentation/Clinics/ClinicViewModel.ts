import { useState } from "react";
import { Clinic } from "../../Core/zoomcare-api";
import { GetClinic } from "../../Domain/UseCase/Clinics/GetClinic";
import { ClinicRepositoryImpl } from "../../Data/Repository/ClinicRepositoryImpl";

export default function ClinicViewModel() {
  const [clinic, setClinic] = useState<Clinic>();

  let UseCase;

  async function getClinicById(id: string) {
    UseCase = new GetClinic(new ClinicRepositoryImpl(), id);
    setClinic(await UseCase.invoke());
  }

  return {
    getClinicById,
    clinic,
  };
}
