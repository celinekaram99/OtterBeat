// import axios from "axios"

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type:"LOGIT_START"});
    try{
        // const res = await axios.post('auth/login', userCredentials);
        
        dispatch({type: "LOGIN_SUCCESS", payload: userCredentials});
    } catch(err){ 
        dispatch({type: "LOGIN_FAILURE", payload: err}); 
    }
};