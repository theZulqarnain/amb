import {CURRENT_STEP,SUCCESSLEAD} from '../actions/types';
const INITIAL_STATE = {
    CurrentStep:0,
    LeadId:null,
    successLead:false
};
export default  (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case CURRENT_STEP:
            return {...state,CurrentStep:action.payload};
        case 'LeadId':
            return {...state,LeadId:action.payload}
        case SUCCESSLEAD:
            return {...state,successLead:true}
        
       
        default:
            return state;
    }
}