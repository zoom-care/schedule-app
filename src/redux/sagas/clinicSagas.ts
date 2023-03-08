import { takeLatest, call, put, all } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";
import clinicActions from "../actions/clinicActions";
import providerAPIs from "../apis/clinics";
import { valdateClinic } from "../../utils";

function* loginUser(): any {
  try {
    return yield call(providerAPIs.login);
  } catch (error) {
    yield put(clinicActions.loginFailed(error));
  }
}

function* getAppointments(): any {
  try {
    const login = yield call(loginUser);
    console.info("login", login);
    const appointments = yield call(
      providerAPIs.getAppointments,
      login.data.authToken
    );
    console.info("appointments", appointments);
    const clinicsAvailable = yield call(
      providerAPIs.getClinics,
      login.data.authToken
    );
    const appointmentsWithClinic = appointments.filter((appointment: any) =>
      valdateClinic(clinicsAvailable, appointment.clinicId)
    );
    yield put(clinicActions.getAppointmentsSuccess(appointmentsWithClinic));
    return appointmentsWithClinic;
  } catch (error) {
    yield put(clinicActions.getAppointmentsFailed(error));
  }
}

function* getClinics(): any {
  try {
    const login = yield call(loginUser);
    const appointments = yield call(getAppointments);
    const providers = yield all(
      appointments.map((appointment: any) =>
        call(
          providerAPIs.getProvider,
          appointment.clinicId,
          login.data.authToken
        )
      )
    );
    yield put(clinicActions.getClinicsSuccess(providers));
  } catch (error) {
    yield put(clinicActions.getClinicsFailed(error));
  }
}

export default function* providers() {
  yield takeLatest(actionTypes.LOGIN, getClinics);
}
