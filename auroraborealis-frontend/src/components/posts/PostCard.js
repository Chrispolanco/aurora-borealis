import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVotePost } from '../../actions/posts'; 

class PostCard extends Component {

    render() {
        const { post } = this.props; 
        const date = new Date(post.created_at).toLocaleDateString()
        return( 
            <div className="postCard"> 
                <ul>
                    <h5>Date Submitted:</h5>
                    {date}
                    <h6>User ID:</h6>
                    {post.user_id}
                    <h6>Description:</h6>
                    {post.description}
                    <h6>Date:</h6>
                    {post.date}
                    <h6>Votes:</h6>
                    {post.votes}
                    <h6>Image:</h6>
                    {post.image} 
                    <h6>Latitude:</h6>
                    {post.latitude} 
                    <h6>Longitude:</h6>
                    {post.longitude}
                </ul> 
            </div>
        )
    }
}; 

const mapStateToProps = (state) => {
    return {
        votes: state.postReducer,
    }
}

export default connect(mapStateToProps, {upVotePost})(PostCard); 