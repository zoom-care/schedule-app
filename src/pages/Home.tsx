import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../redux/actions/appoint";
import { logoutUser } from "../redux/actions/auth";
import Clinic from "./Clinic";

const Home = () => {
  const dispatch: any = useDispatch();
  const appointments = useSelector((state: any) => {
    return state.appointment.appointments;
  })
  useEffect(() => {
    dispatch(getAllAppointments())
  }, [])

  const onLogout = () => {
    dispatch(logoutUser())
  }
  console.log("appointments ", appointments);
  return (
    <>
      <div className="container px-5 py-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Appointment</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={onLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          {appointments.map((appointment: any) => 
            (
              <Clinic key={appointment.id} clinicId={appointment.clinicId} provider={appointment.provider} startTime={appointment.startTime} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;