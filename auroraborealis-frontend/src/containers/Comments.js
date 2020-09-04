import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

class Comments extends Component {

    handleUpvote = (event, commentId) => {
        event.preventDefault()
        this.props.dispatch(upvoteComment(commentId)); 
    }

    handleDownvote = (event, commentId) => {
        event.preventDefault()
        this.props.dispatch(downvoteComment(commentId)); 
    }

    handleRemoveComment = (event, commentId, userId) => {
        event.preventDefault(); 
        this.props.dispatch(removeComment(commentId, userId)); 
    }

    render() {
        return(
            <div className="container">
                {this.props.comments.map(
                    <Comment 
                        key={comment.id}
                        comment={comment}
                        upvoteComment={event=> this.handleUpvote(event, commment.id, userId)}
                        downvoteComment={event=> this.handleDownvote(event, comment.id, userId)}
                        removeComment={event=> this.handleRemoveComment(event, comment.id, userId)}
                    /> 
                )}
            </div>
        )
    }
}