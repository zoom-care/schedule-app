import { all } from 'redux-saga/effects';
import providerSagas from 'sagas/providerSagas'

export default function* rootSaga() {
    yield all([
        providerSagas(),
    ])
}
