import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { apiService } from "../../service";

export default function AppointmentDetails({
  data: { provider, clinicId, startTime },
}: any) {
  const [clinicData, setClinicData] = useState<any>();

  useEffect(() => {
    apiService.get(`/api/clinics/${clinicId}`).then((res) => {
      setClinicData(res.data);
    });
    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-start p-5 mt-8 shadow	bg-white">
      {!!clinicData && (
        <div>
          <h5 className="text-2xl text-slate-700">{clinicData.name}</h5>
          <p className="text-sm text-gray-500">{clinicData.address}</p>
          <label className="text-sm text-gray-500">
            {clinicData.city}, {clinicData.state}, {clinicData.zipcode}{" "}
          </label>
        </div>
      )}
      <div className="flex mt-4">
        <img
          className="rounded-full"
          src="/provider.png"
          width={128}
          height={128}
          alt="Generic placeholder"
        />
        <div className="ml-4 mt-4 items-center">
          <h5 className="mt-0" style={{ color: "#1cb6e3", fontWeight: 700 }}>
            {provider.name}, {provider.credentials}
          </h5>
          <p>{provider.phoneNumber}</p>
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            {dayjs(startTime).format("HH:mm A")}
          </button>
        </div>
      </div>
    </div>
  );
}
