import { createContext, useReducer, } from 'react';
import Reducer from './Reducer';

const INNITIAL_STATE = {
    user: null,
    isFitching: false,
    error: false
}

export const Context = createContext(INNITIAL_STATE);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INNITIAL_STATE);

    return (
        <Context.Provider value={{
            user: state.user,
            isFitching: state.isFitching,
            error: state.error,
            dispatch,
        }} >
            {children}
        </Context.Provider >
    )
}