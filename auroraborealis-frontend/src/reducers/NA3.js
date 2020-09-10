import cuid from 'cuid';
export const cuidFn = cuid;

export default function testReducer(
    state = {
        users: [], 
        posts: [],
        comments: [],  
    }, 
    action, 
) {
    switch(action.type) {

        // case 'ADD_USER': 
        // const user = {
        //     id: cuidFn(),
        //     username: action.username, 
        //     email: action.email, 
        //     first_name: action.first_name, 
        //     last_name: action.last_name, 
        //     password_digest: action.password_digest, 
        // }; 
        // return {...state, users: [...state.users, user]};

        // case 'DELETE_USER': 
        //     const users = state.users.filter(user => user.id !== action.id)
        //     return {...state, users}

        case 'ADD_POST': 
            const post = {
                id: cuidFn(), 
                image: action.post.image, 
                description: action.post.description, 
                votes: action.post.votes, 
                latitude: action.post.latitude, 
                longitude: action.post.longitude, 
                date: action.post.date, 
                user_id: action.post.user_id 
            }; 
            return {...state, posts: [...state.posts, post]}; 

        case 'DELETE_POST': 
            const posts = state.posts.filter(post => post.id !== action.id); 
            return {...state, posts}

        case 'ADD_COMMENT': 
            const comment = {
                id: cuidFn(), 
                context: action.post.comment.context, 
                post_id: action.post.comment.post_id, 
                user_id: action.post.comment.user_id, 
            }; 
            return {...state, comments: [...state.post.comments, comment]};; 

        case 'DELETE_COMMENT':  
            const comments = state.post.comments.filter(comment => comment.id !== action.id); 
            return {...state, comments}

        default: 
            return state; 
    }
}
