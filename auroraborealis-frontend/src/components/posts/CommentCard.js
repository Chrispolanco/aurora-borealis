import React from 'react';

class CommentCard extends React.PureComponent {

    render() {
        const { comment } = this.props; 
        const date = new Date(comment.created_at).toLocaleDateString()
        return( 
            <div> 
                <p className="DateCommentSubmitted"> 
                    {date}
                </p>

                <p className="Comment">
                    {comment.context}
                </p> 
            </div>
        )
    }
}; 

export default CommentCard
