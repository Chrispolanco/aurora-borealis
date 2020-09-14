import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Posts from '../components/posts/Posts'; 

class PostContainer extends Component {


    render() {
        return(
            <div className="PostsContainer">
                <Posts posts={this.props.posts} /> 
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return({
      posts: state.postReducer
    })
}
export default connect(mapStateToProps)(PostContainer)