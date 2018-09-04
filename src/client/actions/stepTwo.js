
import { PICKUP_LATLNG,PICKUPADD,DROPOFF_LATLNG,DROPOFFADD,PICKUPSUFFIX,DROPOFFSUFFIX,DISTANCE,DOUBLEDISTANCE,CENTER,PICKBTN,DROPBTN,PICKMARKER,DROPMARKER} from './types'
// step 2

export function centerHandler(latlng){
    return function(dispatch){
        dispatch({type:CENTER,payload:latlng})
    }
}
export function pickupAddHandler(address){
    return function(dispatch){
        dispatch({type:PICKUPADD,payload:address})
    }
}

export function pickupHandler(latlng) {

    return function(dispatch) {
        dispatch({ type: PICKUP_LATLNG,payload:latlng });
    };
}

export function dropoffHandler(latlng) {
    return function(dispatch){
        dispatch({type:DROPOFF_LATLNG,payload:latlng})
    }
}

export function dropoffAddHandler(address){
    return function(dispatch){
        dispatch({type:DROPOFFADD,payload:address})
    }
}

export function pickupSuffixHandler(val){
    return function(dispatch){
        dispatch({type:PICKUPSUFFIX,payload:val})
    }
}
export function dropoffSuffixHandler(val){
    return function(dispatch){
        dispatch({type:DROPOFFSUFFIX,payload:val})
    }
}
export function distanceHandler(val){
    return function(dispatch){
        dispatch({type:DISTANCE,payload:val})
    }
}

export function doubleDistanceHandler(val){
    return function(dispatch){
        dispatch({type:DOUBLEDISTANCE,payload:val})
    }
}

export function pickCnfmBtnHandler(){
    return function(dispatch,getState){
        let val=getState().StepTwoReducer.pickBtn
        dispatch({type:PICKBTN,payload:!val})
    }
}
export function dropCnfmBtnHandler(){
    return function(dispatch,getState){
        let val=getState().StepTwoReducer.dropBtn
        dispatch({type:DROPBTN,payload:!val})
    }
}

export function pickMarkerHandler(){
    return function(dispatch,getState){
        let val=getState().StepTwoReducer.pickMarker
        dispatch({type:PICKMARKER,payload:!val})
    }
}
export function dropMarkerHandler(){
    return function(dispatch,getState){
        let val=getState().StepTwoReducer.dropMarker
        dispatch({type:DROPMARKER,payload:!val})
    }
}
