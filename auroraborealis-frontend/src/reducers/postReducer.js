const postReducer =(state = {
    posts: [],
}, action) => {
    switch (action.type) {
        case 'ADD_POST': 
            return { posts: state.posts.concat(action.posts)}; 
        case 'DELETE_POST':
            return {posts: state.posts.filter(post => post.id !== action.post.id)}
        default: 
            return state; 
    }
}

export default postReducer