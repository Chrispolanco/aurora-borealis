import React, { Component } from 'react';

class CommentCard extends Component {

    render() {
        const { comment } = this.props; 
        const date = new Date(comment.created_at).toLocaleDateString()
        return( 
            <div> 
                <p className="DateCommentSubmitted"> 
                    Date Comment Submitted:{date}
                </p>

                <p className="Comment">
                    {comment.context}
                </p> 
            </div>
        )
    }
}; 

export default CommentCard
