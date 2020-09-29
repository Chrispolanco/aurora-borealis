import React from 'react'; 
import { connect } from 'react-redux'; 
import PersonalPosts from '../components/posts/PersonalPosts'; 
import { fetchPosts } from './../actions/posts'; 
import { fetchComments } from './../actions/comments'; 
import { deletePost } from './../actions/posts'; 

class PersonalPostContainer extends React.PureComponent {

    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchComments()
    }

    render(){
        return(
            <div> 
                <PersonalPosts posts={this.props.posts} userLoggedIn={this.props.userLoggedIn} deletePost={this.props.deletePost} history={this.props.history}  /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        userLoggedIn: state.currentUserReducer, 
        posts: state.postReducer, 
        comments: state.commentReducer
    })
}


export default connect(mapStateToProps, { fetchPosts, fetchComments, deletePost } )(PersonalPostContainer)
  