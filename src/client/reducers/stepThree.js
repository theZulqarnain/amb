import {ISAMBSEL,ADDONSEL,TOTALPRICE} from '../actions/types';
const INITIAL_STATE = {
    isAmbSel:null,
    addonSel:[],
    totalPrice:0
};
export default  (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case ISAMBSEL:
            return {...state,isAmbSel:action.payload};
        case ADDONSEL:
            return {...state,addonSel:[...action.payload]}
        case TOTALPRICE:
            return {...state,totalPrice:action.payload}
        default:
            return state;
    }
}