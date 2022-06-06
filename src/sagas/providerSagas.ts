import { takeLatest, call, put, all } from 'redux-saga/effects';

import actionTypes from 'actions/actionTypes'
import providerActions from 'actions/providerActions'
import providerSync from 'sync/providerSync'


function *loginUser():any {
	try {
		return yield call(providerSync.login);
	} catch (error) {
		yield put(providerActions.loginFailed(error))
	}
}

function *getAppointments():any {
	try {
		const login = yield call(loginUser);
		const appointments = yield call(providerSync.getAppointments,login.data.authToken)
		yield put(providerActions.getAppointmentsSuccess(appointments.data.appointmentSlots))
		return appointments.data.appointmentSlots
	} catch (error) {
		yield put(providerActions.getAppointmentsFailed(error))
	}
}

function *getProviders(): any{
	try {
		const login = yield call(loginUser);
		const appointments = yield call(getAppointments);
		const providers = yield all(appointments.map((appointment: any) =>
			call(providerSync.getProvider, appointment.clinicId, login.data.authToken)
		))
		yield put(providerActions.getProvidersSuccess(providers))
	} catch (error) {
		yield put(providerActions.getProvidersFailed(error))
	}
}

export default function* providers() {
	yield takeLatest(actionTypes.LOGIN, getProviders)
}