import { combineReducers } from 'redux'
import userReducer from './../reactjs_form/duck/reducer';
const rootReducer = combineReducers({
    // Quan ly cac child reducer
    userReducer,
})
export { rootReducer };