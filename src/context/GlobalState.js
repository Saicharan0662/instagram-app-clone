import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const dummyData = {
    name: 'name',
    username: 'name_01',
    bio: 'this is bio',
}

const initialState = {
    profileDetails: (JSON.parse(localStorage.getItem('profiledetails')) || dummyData),
    explorePost: {
        user: "",
        url: "",
        likes: 0
    }
}

export const GlobalContext = createContext(initialState)

//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //action
    const handelChange = (data) => {
        dispatch({ type: 'EDIT', payload: data })
    }

    const explorePostSetter = (data) => {
        dispatch({ type: 'POST_SETTER', payload: data })
    }

    return (
        <GlobalContext.Provider
            value={{
                profileDetails: state.profileDetails,
                explorePost: state.explorePost,
                handelChange,
                explorePostSetter
            }}>
            {children}
        </GlobalContext.Provider>
    )
}