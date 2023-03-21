import React, { useEffect, useState } from "react";
import AppointmentDetails from "../../components/AppointmentDetails";
import { useUserContex } from "../../context/UserContext";
import { apiService } from "../../service";

export default function AppointmentPage() {
  const [appointmentSlots, setAppointmentSlots] = useState<any[]>([]);

  const { setUser } = useUserContex();
  const onLogout = () => {
    setUser(null);
    localStorage.clear();
  };
  useEffect(() => {
    apiService.get("/api/appointments").then((res) => {
      if (res?.data?.appointmentSlots) {
        setAppointmentSlots(res.data.appointmentSlots);
      }
    });
    return () => {};
  }, []);

  return (
    <div className="bg-gray-50 ">
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              onClick={onLogout}
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log Out <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <section className="max-w-[1024px] mx-auto">
        {appointmentSlots.map((appointment) => {
          return <AppointmentDetails data={appointment} key={appointment.id} />;
        })}
      </section>
      {/* <Clinic /> */}
    </div>
  );
}
