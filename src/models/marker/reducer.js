import {MARKER_LIST_SUCCESS} from './constants'

const initialState = {
    markerList: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKER_LIST_SUCCESS:
            return {
                ...state,
                markerList: action.markerList,
            }
        default:
            return state
    }
}

export default reducer
