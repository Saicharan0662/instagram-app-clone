import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const dummyData = {
    name: 'name',
    username: 'name_01',
    bio: 'this is bio',
}
const orgData = JSON.parse(localStorage.getItem('profiledetails'))
const initialState = {
    profileDetails: (orgData ? orgData : dummyData),
    explorePost: {
        user: "",
        url: "",
        likes: 0
    },
    savedPost: [{}]
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

    const savePost = (data) => {
        dispatch({ type: 'SAVE_POST', payload: data })
    }

    const removePost = (id) => {
        dispatch({ type: 'REMOVE_POST', payload: id })
    }

    return (
        <GlobalContext.Provider
            value={{
                profileDetails: state.profileDetails,
                explorePost: state.explorePost,
                savedPost: state.savedPost,
                handelChange,
                explorePostSetter,
                savePost,
                removePost
            }}>
            {children}
        </GlobalContext.Provider>
    )
}