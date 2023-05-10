import { useState } from "react";
import { ClinicsDto } from "../../Core/zoomcare-api";
import { GetClinics } from "../../Domain/UseCase/Clinics/GetClinics";
import { ClinicsRepositoryImpl } from "../../Data/Repository/ClinicsRepositoryImpl";

export default function ClinicsViewModel() {
  const [clinics, setClinics] = useState<ClinicsDto>();

  const UseCase = new GetClinics(new ClinicsRepositoryImpl());

  async function getClinics() {
    setClinics(await UseCase.invoke());
  }

  return {
    getClinics,
    clinics,
  };
}
