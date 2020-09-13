import React, { Component } from 'react';

class CommentCard extends Component {

    render() {
        const { comment } = this.props; 
        return( 
            <div className="commentCard"> 
                <ul>
                    {comment.context}
                </ul> 
            </div>
        )
    }
}; 

export default CommentCard