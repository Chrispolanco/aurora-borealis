import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PersonalPosts from '../components/posts/PersonalPosts'; 
import { fetchPosts } from './../actions/posts'; 
import { fetchComments } from './../actions/comments'; 

class PersonalPostContainer extends Component{

    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchComments()
    }

    render(){
        return(
            <div> 
                <PersonalPosts posts={this.props.posts} userLoggedIn={this.props.userLoggedIn} /> 
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


export default connect(mapStateToProps, { fetchPosts, fetchComments} )(PersonalPostContainer)
  