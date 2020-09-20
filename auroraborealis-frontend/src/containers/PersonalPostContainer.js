import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PersonalPosts from '../components/posts/PersonalPosts'; 
import PostForm from '../components/posts/PostForm'; 

class PersonalPostContainer extends Component{
    render(){
        return(
            <div> 
                <PersonalPosts posts={this.props.posts} userLoggedIn={this.props.userLoggedIn} /> 
                <PostForm userLoggedIn={this.props.userLoggedIn} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
      userLoggedIn: state.currentUserReducer, 
      posts: state.postReducer
    })
}

export default connect(mapStateToProps)(PersonalPostContainer)
  