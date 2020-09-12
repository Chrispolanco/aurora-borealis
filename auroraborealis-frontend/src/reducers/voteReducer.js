const voteReducer = (state = [], action) => {
    switch(action.type) {

        case 'UPVOTE_POST':
            return state.map((post) => 
            post.id === action.commentId ? {...post, votes: (post.votes += 1)} : post
            )

        case 'DOWNVOTE_POST': 
            return state.map((post) => {
                post.id === action.commentId && post.votes > 0 ? {...post, votes: (post.votes -= 1)} : post;
            })
        
        default: 
            return state; 
    }
}

export default voteReducer