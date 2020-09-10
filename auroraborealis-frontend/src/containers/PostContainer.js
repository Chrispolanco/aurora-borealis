import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
// import PostForm from '../components/posts/PostForm'; 
import Posts from '..components/posts/Posts'

class PostsContainer extends Component {

    render() {
        return(
            <div className="PostsContainer">
                <Posts /> 
                {/* <PostForm addPost={this.props.addPost} userId={this.props.user_id} />  */}
            </div> 
        )
    }

}

const mapStateToProps = ( posts ) => ({ posts })


const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch({ type: "ADD_POST", post }), 
    deletePost: (id) => dispatch({ type: "DELETE_POST", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
