import {PATIENT_NAME,PATIENT_NUMBER,RIDE_DATE,RIDE_TIME,PHERR} from '../actions/types';
const INITIAL_STATE = {
    patient_name:'',
    patient_number:'',
    ride_date:false,
    ride_time:false,
    phoneErr:false
};
export default  (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case PATIENT_NAME:
            return {...state,patient_name:action.payload};
        case PATIENT_NUMBER:
            return {...state,patient_number:action.payload};
        case PHERR:
            return {...state,phoneErr:action.payload}
        case RIDE_DATE:
            return {...state,ride_date:action.payload};
        case RIDE_TIME:
            return {...state,ride_time:action.payload};
        default:
            return state;
    }
}