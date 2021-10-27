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
        case 'POST_SETTER':
            return {
                explorePost: {
                    user: action.payload.user,
                    url: action.payload.url,
                    likes: action.payload.likes
                }
            }
        default:
            return state
    }
}

export default AppReducer