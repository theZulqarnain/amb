
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR, RESET
} from '../actions/types';
const INITIAL_STATE = {
    authenticated: false,
    error:true,
};
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        // case RESET:
        //     // console.log(action,'step Main');
        //     return {...state,...INITIAL_STATE}

    }

    return state;
}