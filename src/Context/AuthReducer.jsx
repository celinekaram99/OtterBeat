const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIT_START":
            return {
                user: null,
                isFetching:true,
                error:false,
    };
    case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            isFetching:false,
            error:false,
    };
    case "LOGIN_FAILURE":
        return {
            user: null,
            isFetching:true,
            error:action.payload,
    };
    default:
        return state
    }   
};


export default AuthReducer;