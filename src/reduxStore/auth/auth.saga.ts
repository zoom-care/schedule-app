import { all, call, Effect, put, takeLatest } from "redux-saga/effects";
import { loginUserApi } from "../../api";
import { AuthActionType, OnLoginUser, onSetupAuthData } from "./auth.actions";
import { clearAuthToken, getAuthToken, setAuthToken } from "./auth.storage";

function* loginUser({ payload }: OnLoginUser) {
  try {
    const { authToken } = yield call(
      loginUserApi,
      payload.email,
      payload.password
    );

    yield call(setAuthToken, authToken);
    yield put(onSetupAuthData({ isAuthenticated: true }));
  } catch {
    //Error Handle Here
  }
}

function* logoutUser() {
  yield call(clearAuthToken);
  yield put(onSetupAuthData({ isAuthenticated: false }));
}

function* initAuth() {
  const authToken: string = yield call(getAuthToken);
  if (authToken !== "") {
    yield put(onSetupAuthData({ isAuthenticated: true }));
  }
}

export function* authSaga(): Generator<Effect> {
  yield all([
    takeLatest(AuthActionType.INIT_AUTH, initAuth),
    takeLatest(AuthActionType.LOGIN_USER, loginUser),
    takeLatest(AuthActionType.LOGOUT_USER, logoutUser),
  ]);
}
