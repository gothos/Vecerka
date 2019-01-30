import {combineReducers} from 'redux'

import markerReducer from './src/models/marker/reducer'
import loadingReducer from './src/models/loadingShared/reducer'


export default combineReducers({
    markers: markerReducer,
    loadings: loadingReducer,
})
