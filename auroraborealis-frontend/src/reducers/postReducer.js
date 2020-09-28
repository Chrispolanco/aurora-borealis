const initialState = []

function postReducer (state = initialState, action){
    switch(action.type) {
        case "GET_POSTS":
            return action.posts
        
        case "ADD_POST":
            return [...state, action.post]

        case "DELETE_POST": 
            // return {todos: state.todos.filter(todo => todo.id !== action.payload)}
            return state.filter(post => post.id !== action.postId)

        case "UPDATE_POST": 
            return state.map(post => post.id === action.post.id ? action.post : post)

        case "CLEAR_POSTS": 
            return initialState

        default: 
            return state

        case 'UPVOTE_POST':
            return state.map((post) => 
            post.id === action.postId ? {...post, votes: (post.votes += 1)} : post
            )

        case 'DOWNVOTE_POST': 
            return state.map((post) =>
            post.id === action.postId && post.votes > 0 ? {...post, votes: (post.votes -= 1)} : post
            )  
    }
}

export default postReducer; 