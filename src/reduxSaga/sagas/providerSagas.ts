import { takeLatest, call, put, all } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";
import providerActions from "../actions/providerActions";
import providerAPIs from "../apis/providers";
import { hasClinic } from "../../helpers/providersHelper";

function* loginUser(): any {
  try {
    return yield call(providerAPIs.login);
  } catch (error) {
    yield put(providerActions.loginFailed(error));
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
      providerAPIs.getProviders,
      login.data.authToken
    );
    const appointmentsWithClinic = appointments.filter((appointment: any) =>
      hasClinic(clinicsAvailable, appointment.clinicId)
    );
    yield put(providerActions.getAppointmentsSuccess(appointmentsWithClinic));
    return appointmentsWithClinic;
  } catch (error) {
    yield put(providerActions.getAppointmentsFailed(error));
  }
}

function* getProviders(): any {
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
    yield put(providerActions.getProvidersSuccess(providers));
  } catch (error) {
    yield put(providerActions.getProvidersFailed(error));
  }
}

export default function* providers() {
  yield takeLatest(actionTypes.LOGIN, getProviders);
}
