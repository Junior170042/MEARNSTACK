const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFitching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFitching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFitching: false,
                error: true
            }
        case "LOGOUT":
            return {
                user: null,
                isFitching: false,
                error: false
            }

        case "UPDATE_START":
            return {
                ...state,
                isFitching: true,
                error: false
            };
        case "UPDATE_SUCCESS":
            return {
                user: action.payload,
                isFitching: false,
                error: false
            }
        case "UPDATE_FAILURE":
            return {
                ...state,
                isFitching: false,
                error: true
            }
        default: return state;
    }

}

export default Reducer;