import uuid from 'uuid'; 

const postReducer =(state = {
    posts: [],
}, action) => {
    switch (action.type) {
        case 'ADD_POST': 
            const post = {
                id: uuid(),
                image: action.post.image, 
                description: action.post.description, 
                votes: action.post.votes, 
                latitude: action.post.latitude, 
                longitude: action.post.longitude, 
                date: action.post.date, 
                user_id: action.post.user_id
            }
            return { posts: state.posts.concat(post)}; 
        case 'DELETE_POST':
            return {posts: state.posts.filter(post => post.id !== action.post)}
        default: 
            return state; 
    }
}

export default postReducer