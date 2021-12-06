const AppReducer = (state, action) => {
    switch (action.type) {
        case 'EDIT':
            return {
                ...state,
                profileDetails: {
                    name: action.payload.name,
                    username: action.payload.username,
                    bio: action.payload.bio,
                }
            }
        case 'POST_SETTER':
            return {
                ...state,
                explorePost: {
                    user: action.payload.user,
                    url: action.payload.url,
                    likes: action.payload.likes,
                    liked: action.payload.liked,
                    bookmark: action.payload.bookmark
                }
            }
        case 'LIKE':
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (post.id === action.payload) {
                        post.likes += 1;
                        post.liked = true
                    }
                    return [...state.posts, post]
                })
            }
        case 'UNLIKE':
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (post.id === action.payload) {
                        post.likes -= 1;
                        post.liked = false
                    }
                    return [...state.posts, post]
                })
            }
        case 'SAVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (post.id === action.payload) {
                        post.bookmark = true
                    }
                    return [...state.posts, post]
                })
            }
        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (post.id === action.payload) {
                        post.bookmark = false
                    }
                    return [...state.posts, post]
                })
            }
        default:
            return state
    }
}

export default AppReducer