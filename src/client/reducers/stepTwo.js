import {PICKUPADD,PICKUP_LATLNG,DROPOFF_LATLNG,DROPOFFADD,PICKUPSUFFIX,DROPOFFSUFFIX,DISTANCE,DOUBLEDISTANCE,CENTER,PICKBTN,DROPBTN,PICKMARKER,DROPMARKER} from '../actions/types';
const currentStanHospital =localStorage.getItem('hospSel') && JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')];
const currentStanHospitalLatLng =currentStanHospital && { lat: parseFloat(currentStanHospital.lat), lng: parseFloat(currentStanHospital.lng) };
const INITIAL_STATE = {
    validStepTwo:false,
    pickupAddress: '',
    pickupLatlng: false,
    dropoffLatlng:false,
    dropoffAddress:'',
    pickupSuffix:false,
    dropoffSuffix:false,
    distance:'',
    dbDistance:null,
    center:  {lat: 17.385044, lng: 78.486671},
    pickBtn:false,
    dropBtn:false,
    pickMarker:true,
    dropMarker:true
};
export default  (state=INITIAL_STATE,action) => {
    // console.log(action,'step two')
    switch(action.type) {
        case CENTER: 
            return {...state,center:action.payload}
        case PICKUPADD: 
            return {...state,pickupAddress:action.payload}
        case PICKUP_LATLNG:
            return {...state,pickupLatlng:action.payload}
        case DROPOFF_LATLNG:
            return {...state,dropoffLatlng:action.payload}
        case DROPOFFADD:
            return {...state,dropoffAddress:action.payload}
        case PICKUPSUFFIX:
            return {...state,pickupSuffix:action.payload}
        case DROPOFFSUFFIX:
            return {...state,dropoffSuffix:action.payload}
        case DISTANCE:
            return {...state,distance:action.payload}
        case DOUBLEDISTANCE:
            return {...state,dbDistance:action.payload}
        case PICKBTN:
            return {...state,pickBtn:action.payload}
        case DROPBTN:
            return {...state,dropBtn:action.payload}
        case PICKMARKER:
            return {...state,pickMarker:action.payload}
        case DROPMARKER:
            return {...state,dropMarker:action.payload}
        
        default:
            return state;
    }
}