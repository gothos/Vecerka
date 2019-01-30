import {
    MARKER_LIST_FAILURE, MARKER_LIST_SUCCESS, MARKER_LIST_REQUEST,
    ADD_MARKER_FAILURE, ADD_MARKER_REQUEST, ADD_MARKER_SUCCESS
} from './constants'

export const markerListRequest = () => ({
    type: MARKER_LIST_REQUEST,
})

export const markerListSuccess = data => ({
    type: MARKER_LIST_SUCCESS,
    markerList: data,
})

export const markerListFailure = error => ({
    type: MARKER_LIST_FAILURE,
    error,
})


export const addMarkerRequest = (data, navigation) => ({
    type: ADD_MARKER_REQUEST,
    data,
    navigation
})

export const addMarkerSuccess = () => ({
    type: ADD_MARKER_SUCCESS,
})

export const addMarkerFailure = error => ({
    type: ADD_MARKER_FAILURE,
    error,
})
