const AppReducer = (state, action) => {
    switch (action.type) {
        case 'EDIT':
            return {
                profileDetails: {
                    name: action.payload.name,
                    username: action.payload.username,
                    bio: action.payload.bio,
                }
            }
        default:
            return state
    }
}

export default AppReducer