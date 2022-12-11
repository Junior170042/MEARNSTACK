import { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';
const INNITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFitching: false,
    error: false
}

export const Context = createContext(INNITIAL_STATE);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INNITIAL_STATE);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    })

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