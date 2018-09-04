import { AUTH_USER,AUTH_ERROR,UNAUTH_USER} from "./types";

const ROOT_URL  =   'http://localhost:3090';

export function signinUser({ email, password }) {
    return function(dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                //update state to  indicate user  is authenticate
                dispatch({type:AUTH_USER});
                //save the jwt token
                localStorage.setItem('token',response.data.token);
                //-redirect to route
                history.push('/contactus');
            })

            .catch(()=>{
                dispatch(authError('Please Check Your Credentials'));
            })

    }
}

export function signupUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/contactus');
            })
            .catch(response =>{
                // console.log(JSON.stringify(response))
                dispatch(authError(response.response.data.error));
            });
    }
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}
export function singoutUser() {
    localStorage.removeItem('token');
    return {type:UNAUTH_USER }
}