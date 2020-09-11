function postReducer (state = [], action){
    switch(action.type) {
        case "GET_POSTS": 
            return action.posts
        
        case "ADD_POST":
            return [...state, action.post]

        case "DELETE_POST": 
            return state.filter(post => post.id !== action.postId)

        case "UPDATE_POST": 
            return state.map(post => post.id === action.post.id ? action.post : post)

        default: 
        return state
    }

}

export default postReducer; 