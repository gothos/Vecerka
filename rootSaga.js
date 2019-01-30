import {all} from 'redux-saga/effects'

import {watchMarkerListRequest, watchAddMarkerRequest} from './src/models/marker/sagas'


export default function* rootSaga() {
    yield all([
        watchMarkerListRequest(),
        watchAddMarkerRequest()
    ])
}
