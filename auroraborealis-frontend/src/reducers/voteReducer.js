const userReducer = (state = [], action) => {
    switch(action.type) {

        case 'UPVOTE_COMMENT':
            return state.map((comment) => 
                comment.id === action.commentId ? {...comment, votes: (comment.votes += 1)} : comment
            )

        case 'DOWNVOTE_COMMENT': 
            return state.map((comment) => {
                comment.id === action.commentId && comment.votes > 0 ? {...comment, votes: (comment.votes -= 1)} : comment;
            })
        
        default: 
            return state; 
    }
}

export default userReducer