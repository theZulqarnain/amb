import {PATIENT_NAME,PATIENT_NUMBER,RIDE_DATE,RIDE_TIME,PHERR} from './types'

export function patientNameAction(name) {
    return function(dispatch) {
        dispatch({ type: PATIENT_NAME,payload:name });
    };
}
export function patientNumberAction(val) {
    return function(dispatch) {
        dispatch({ type: PATIENT_NUMBER,payload:val });
    };
}
export function phoneErr(val){
    return function(dispatch){
        dispatch({type:PHERR,payload:val})
    }
}
export function rideDateAction(date) {
    return function(dispatch) {
        dispatch({ type: RIDE_DATE,payload:date });
    };
}

export function rideTimeAction(time) {
    return function(dispatch) {
        dispatch({ type: RIDE_TIME,payload:time });
    };
}