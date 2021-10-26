import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    profileDetails: (JSON.parse(localStorage.getItem('profiledetails')) || {
        name: 'name',
        username: 'name_01',
        bio: 'this is bio',
    })
}

export const GlobalContext = createContext(initialState)

//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //action
    const handelChange = (data) => {
        dispatch({ type: 'EDIT', payload: data })
    }

    return (
        <GlobalContext.Provider
            value={{
                profileDetails: state.profileDetails,
                handelChange
            }}>
            {children}
        </GlobalContext.Provider>
    )
}