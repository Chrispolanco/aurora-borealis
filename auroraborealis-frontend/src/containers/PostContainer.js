import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Posts from '../components/posts/Posts'; 

class PostContainer extends Component {

    render() {
        return(
            <div className="PostsContainer">
                <Posts posts={this.props.posts} /> 
                console.log(posts)
            </div> 
        )
    }

}

// const mapStateToProps = state => {
//     return {
//         posts: state.posts
//     }
// }

const mapStateToProps = ( posts ) => ({ posts })


// const mapDispatchToProps = dispatch => ({
//     addPost: post => dispatch({ type: "ADD_POST", post }), 
//     deletePost: (id) => dispatch({ type: "DELETE_POST", id})
// })

export default connect(mapStateToProps)(PostContainer)
