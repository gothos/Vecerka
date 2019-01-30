import {call, put, takeLatest} from 'redux-saga/effects'

import {MARKER_LIST_REQUEST, ADD_MARKER_REQUEST} from './constants'
import {addMarkerSuccess, markerListFailure, markerListSuccess, addMarkerFailure, markerListRequest} from './actions'
import urls from '../../lib/api'
import libHttp from '../../lib/http'


// async Caller
export const markerListRequestCaller = () => libHttp.get(urls.marker.list)


// worker
function* doMarkerListRequest() {
    try {
        const response = yield call(markerListRequestCaller)
        yield put(markerListSuccess(response.data))
    } catch (error) {
        yield put(markerListFailure(error))
    }
}

// watcher
export function* watchMarkerListRequest() {
    yield takeLatest(MARKER_LIST_REQUEST, doMarkerListRequest)
}


// worker
function* doAddMarkerRequest(action) {
    try {
        yield call([libHttp, 'post'], urls.marker.add, action.data)
        action.navigation.navigate('SuccessView', {})
        yield put(addMarkerSuccess())
        yield put(markerListRequest())
    } catch (error) {
        yield put(addMarkerFailure(error))
    }
}

// watcher
export function* watchAddMarkerRequest() {
    yield takeLatest(ADD_MARKER_REQUEST, doAddMarkerRequest)
}
