const AppReducer = (state, action) => {
    console.log(action.payload)
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
        case 'SAVE_POST':
            return {
                ...state,
                savedPost: [action.payload, ...state.savedPost]
            }
        case 'REMOVE_POST':
            return {
                ...state,
                savedPost: state.savedPost.filter(post => post.id !== action.payload)
            }
        default:
            return state
    }
}

export default AppReducer